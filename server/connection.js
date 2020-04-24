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
    const port = 8080;
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
        
        //--GET--Basic Search                                           Ex:  http://34.71.147.72:80/search?type=book&query=Flatland&pageNum=5 SORTING http://localhost:8080/search?type=book&query=brother&pageNum=3&sort=title&ord=1
        app.get("/search", async (request, response) => {
            var type = request.query['type'];
            var pageNum = parseInt(request.query['pageNum']) || 1;
            var sort_input = request.query['sort'];
            var order = parseInt(request.query['ord']);
            console.log(`sort: ${sort_input}\t${order}`);
            var str = String(request.query['query']);
            var pageSize=12;
            var fresult =[];
            var cursor;
            var count=0;
            var author = [];
            var ree = new RegExp(str, 'i');
            if(order != 1 && order !=-1){
                order = 1;
            }
            console.log(ree);
            switch (type){
                case "book":
                    var mysort = {"volumeInfo.title": 1};
                    console.log("this is sort_input");
                    console.log(sort_input);
                    switch(sort_input){
                        case "book":
                            var test = (order ==1 ? mysort = {"volumeInfo.title": 1} : mysort = {"volumeInfo.title": -1});
                            console.log("yo the order is", order);
                            break;
                        case "author":
                            console.log('authors hit');
                            var test = (order ==1 ? mysort = {"volumeInfo.authors": 1} : mysort = {"volumeInfo.authors": -1});
                            break;
                        case "date":
                            console.log('date hit');
                            var test = (order ==1 ? mysort = {"volumeInfo.publishedDate": 1} : mysort = {"volumeInfo.publishedDate": -1});
                            break;          
                        default:
                            var mysort = {"volumeInfo.title": 1};
                    }                    
                    console.log("Book Request");
                    if(str==""){
                        console.log("blank query for books!");
                        cursor= client.db("bookAppData").collection("books").find({"volumeInfo.title": ree }).sort(mysort).skip(12*(pageNum-1)).limit(12); 
                    }
                    else{
                        cursor= client.db("bookAppData").collection("books").find({"volumeInfo.title": ree }).sort(mysort);
                    }
                    //
                    break;
                case "author":
                    var mysort = {"author": 1};
                    var test = (order ==1? mysort = {"author": 1} : mysort = {"author": -1});
                    console.log("Author Request");  
                    cursor= client.db("bookAppData").collection("authorImages").find({"author": ree}, null,undefined).sort(mysort);
                    break;
                case "genre":
                    var mysort = {"genre": 1};
                    var tet = (order ==1? mysort = {"genre": 1} : mysort = {"genre": -1});
                    console.log("Genre Request");
                    cursor= client.db("bookAppData").collection("genre").find({"genre": ree }, null,undefined).sort(mysort);
                    break;
                default:
                    response.status(418).send("Error Code 418\nPlease don't be stupid...or else");
            }
            await cursor.forEach(doc => {if(doc!=null){count++;fresult.push(doc);}});
            console.log(`Total count: ${count}`);
            var pager;
            var pageOfItems;
            if(str==""){
                pager = paginate(31597, pageNum, pageSize);
                pageOfItems = fresult;   
            }
            else{
                pager = paginate(count,pageNum, pageSize);
                pageOfItems = fresult.slice(pager.startIndex, pager.endIndex+1);
            }

            if(type == "author"){
                const val = await getAuthorGenre(client, pageOfItems, author);
                console.log(author[0]);
                console.log("val: ",val);
                response.json({pager, pageOfItems, val});
                return; 
            }
            console.log(`pageNum: ${pageNum}\npageSize: ${pageSize}\nSI: ${pager.startIndex}\nEI: ${pager.endIndex+1}`);
            response.json({pager, pageOfItems});    
        });

        //--Get--List an Author's books                                 Ex:  http://34.71.147.72:80/authorsBooks?name=Patrick+Rothfuss&pageNum=1
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

        //--Get--List a genre's books                                 Ex:  http://34.71.147.72:80/genreBooks?genre=scienceFiction&numPage=1
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
        app.get("/book", async (request, response)=>{                  //Ex: http://34.71.147.72:80/book?isbn=9781602062894   
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
        app.get("/author", async (request, response)=>{                  //Ex:  http://34.71.147.72:80/author?name=Patrick+Rothfus
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
        app.get("/genre", async (request, response)=>{                  //Ex:  http://34.71.147.72:80/genre?genre=scienceFiction
            var genre = String(request.query['genre']);
            var doc;
            var fresult =[];
            console.log(`Looking for genre: ${genre}`);
            doc= await client.db("bookAppData").collection("genre").findOne({"genre": genre },null,undefined); 
            if(doc){
                response.json(doc)
                }else{
                response.status(418).send("Error Code 418: Bad Genre");
            }
        })

        //--Get--Recommended Books
        app.get("/recBooks", async (request, response)=>{                  //Ex:  http://34.71.147.72:80/recBooks?genre=scienceFiction
            var genre = String(request.query['genre']);
            var count =0;
            var cursor;
            var list = [];
            const auth = await getGenreAuthors(client, genre);
            console.log(`Looking for books of genre: ${genre}`);
            // cursor= client.db("bookAppData").collection("books").find({"volumeInfo.genre": genre },null,undefined); 
            for(var i =0; i < 9; i++ ){
                var index = Math.floor(Math.random() * 50);
                list.push( await client.db("bookAppData").collection("books").findOne({"volumeInfo.genre": genre },{skip: index},undefined));                
            }
            console.log(list.length);
            response.json({list, auth});
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
};

async function getGenreAuthors(client, genre){
   //first get nine unqiue authors
   var res =[];
   var r;
    r = await client.db("bookAppData").collection("authorImages").find().limit(9);               
    await r.forEach(doc=>{res.push(doc)});
    console.log("res", res);
    return  new Promise(resolve =>{
        resolve(res);
    })
   //get their respective info
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

async function getAuthorGenre(client, pageOfItems, author){
    var test = [];
    var result;
    for(let i =0; i<pageOfItems.length; i++){
        result =  await client.db("bookAppData").collection("books").findOne({"volumeInfo.authors": pageOfItems[i].author});
        test.push({"genre": result.volumeInfo.genre});
    }
    console.log(`GAG:`, test[0]);
    return new Promise(resolve=>{
        resolve(test);
    }); 
}

function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 2000);
    });
  }

  function scaryClownie() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('fuck you');
      }, 2000);
    });
  }

main().catch(console.error);
