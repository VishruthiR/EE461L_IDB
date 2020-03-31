const {MongoClient} = require('mongodb');
const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
const paginate = require('jw-paginate');
require('dotenv').config();



async function main(){
    const app = express();
    // process.env.URI
    const uri = process.env.ATLAS_URI;
    const port = process.env.PORT || 5000;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected!");
   } catch (e) {
        console.error(e);
    } finally {
        app.use(cors());
        app.use(express.json());
        
        //--GET--Basic Search                                           Ex: http://localhost:5000/search?type=book&query=Flatland&pageNum=5
        app.get("/search", async (request, response) => {
            var type = request.query['type'];
            var pageNum = parseInt(request.query['pageNum']) || 1;
            var pageSize=10;
            var str = String(request.query['query']);
            var fresult =[];
            var cursor;
            var count=0;
            var ree = new RegExp(str, 'i');
            console.log(ree);
            switch (type){
                case "book":
                    console.log("Book Request");
                    cursor= client.db("bookAppData").collection("books").find({"volumeInfo.title": ree },null,undefined);
                    break;
                case "author":
                    console.log("Author Request");  
                    cursor= client.db("bookAppData").collection("authorImages").find({"author": ree}, null,undefined);
                    break;
                case "genre":
                    console.log("Genre Request");
                    cursor= client.db("bookAppData").collection("books").find({"volumeInfo.genre": ree }, {limit: 5},undefined);
                    break;
                default:
                    response.status(418).send("Error Code 418\nPlease don't be stupid...or else");
            }
            await cursor.forEach(doc => {if(doc!=null){count++;fresult.push(doc);}});
            console.log(`Total count: ${count}`);
            const pager = paginate(count,pageNum, pageSize);
            const pageOfItems = fresult.slice(pager.startIndex, pager.endIndex+1);
            console.log(`pageNum: ${pageNum}\npageSize: ${pageSize}\nSI: ${pager.startIndex}\nEI: ${pager.endIndex+1}`);
            response.json({pager, pageOfItems});
        });

        //--Get--List an Author's books                                 Ex: http://localhost:5000/authorsBooks?name=Patrick+Rothfuss&pageNum=1
        app.get("/authorsBooks", async (request, response)=>{
            var name = String(request.query['name']);
            var pageNum = parseInt(request.query['pageNum']) || 1;
            var pageSize=10;
            var count =0;
            var cursor;
            var fresult =[];
            console.log(`Looking for ${name}'s books`);
            cursor= client.db("bookAppData").collection("books").find({"volumeInfo.authors": name },null,undefined); 
            await cursor.forEach(doc => {if(doc!=null){count++;fresult.push(doc);}});
            console.log(`Total count: ${count}`);
            const pager = paginate(count,pageNum, pageSize);
            const pageOfItems = fresult.slice(pager.startIndex, pager.endIndex+1);
            console.log(`pageNum: ${pageNum}\npageSize: ${pageSize}\nSI: ${pager.startIndex}\nEI: ${pager.endIndex+1}`);
            response.json({pager, pageOfItems});
        })

        //--Get--List a genre's books                                 Ex: http://localhost:5000/genreBooks?genre=scienceFiction&numPage=1
        app.get("/genreBooks", async (request, response)=>{
            var genre = String(request.query['genre']);
            var count =0;
            var pageNum = parseInt(request.query['pageNum']) || 1;
            var pageSize=10;
            var cursor;
            var fresult =[];
            console.log(`Looking for books of genre: ${genre}`);
            cursor= client.db("bookAppData").collection("books").find({"volumeInfo.genre": name },null,undefined); 
            await cursor.forEach(doc => {if(doc!=null){count++;fresult.push(doc);}});
            console.log(`Total count: ${count}`);
            const pager = paginate(count,pageNum, pageSize);
            const pageOfItems = fresult.slice(pager.startIndex, pager.endIndex+1);
            console.log(`pageNum: ${pageNum}\npageSize: ${pageSize}\nSI: ${pager.startIndex}\nEI: ${pager.endIndex+1}`);
            response.json({pager, pageOfItems});
        })


        //--Get--Single Book
        app.get("/book", async (request, response)=>{                  //Ex: http://localhost:5000/book?isbn=9781602062894
            var isbn = String(request.query['isbn']);
            console.log(isbn);
            // var doc;
            var fresult =[];
            console.log(`Looking for book with ISBN: ${isbn}`);
            var doc= await client.db("bookAppData").collection("books").findOne({"volumeInfo.industryIdentifiers.identifier": isbn },null,undefined); 
            console.log(doc);
            if(doc){
                response.json(doc)
             }else{
                response.status(418).send("Error Code 418: Bad ISBN Number");
            }
        })

        //--Get--Single Author
        app.get("/author", async (request, response)=>{                  //Ex: http://localhost:5000/author?name=Patrick+Rothfus
            var name = String(request.query['name']);
            var doc;
            var fresult =[];
            console.log(`Looking for Author by the name of: ${name}`);
            doc= await client.db("bookAppData").collection("authorImages").findOne({"author": name },null,undefined); 
            if(doc){
                response.json(doc)
                }else{
                response.status(418).send("Error Code 418: Bad Author");
            }
        })


        //--Get--Single Genre
        app.get("/genre", async (request, response)=>{                  //Ex: http://localhost:5000/genre?genre=scienceFiction
            var genre = String(request.query['genre']);
            var doc;
            var fresult =[];
            console.log(`Looking for genre: ${genre}`);
            doc= await client.db("bookAppData").collection("authorImages").findOne({"author": genre },null,undefined); 
            if(doc){
                response.json(doc)
                }else{
                response.status(418).send("Error Code 418: Bad Author");
            }
        })

        //--Get--Recommended Books
        app.get("/recBooks", async (request, response)=>{                  //Ex: http://localhost:5000/recBooks?genre=scienceFiction
            var genre = String(request.query['genre']);
            var count =0;
            var cursor;
            var fresult =[];
            var list = [];
            console.log(`Looking for books of genre: ${genre}`);
            cursor= client.db("bookAppData").collection("books").find({"volumeInfo.genre": genre },null,undefined); 
            await cursor.forEach(doc => {if(doc!=null){count++;fresult.push(doc);}});
            console.log(`Total count: ${count}`);
            for(var i =0; i < 9; i++ ){
                var index = Math.floor(Math.random() * count-1);
                list.push(fresult[index]);
            }
            console.log(list.length);
            response.json(list);
        })


        //--Run Server Indefinitely--
        app.listen(port, ()=>{
            console.log(`Server is running on port: ${port}`);
        });
    }   
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


async function findOneElement(client, isbn){
    var result = await client.db("bookAppData").collection("books").findOne({"volumeInfo.industryIdentifiers.identifier": 'isbn'});
    if(result){
        console.log(result);
        return result;
    }else{
        console.log("there is an error");
    }
}

async function findFiveBooks(client){
    var result = await client.db("bookAppData").collection("books").find().limit(5); 
    if(result){
        console.log("\n\n\nFive books found\n\n\n");
        // await result.forEach(doc =>console.log(doc));
    }else{
        console.log("five books there is an error");
    }
    return result;
}

main().catch(console.error);