const {MongoClient} = require('mongodb');
const express = require('express');
const cors = require('cors');
const axios = require('axios').default;


async function main(){
    const app = express();
    const uri = 'mongodb+srv://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net/test?retryWrites=true&w=majority';
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
            var skips = request.query['pageNum']-1;
            var str = String(request.query['query']);
            var fresult =[];
            var cursor;
            var count=0;
            var ree = new RegExp(str, 'i');
            console.log(str);
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
            console.log(`Size: ${count}`);
            response.json(fresult);
        });

        //--Get--List an Author's books                                 Ex: http://localhost:5000/authorsBooks?name=Patrick+Rothfuss
        app.get("/authorsBooks", async (request, response)=>{
            var name = String(request.query['name']);
            var count =0;
            var cursor;
            var fresult =[];
            console.log(`Looking for ${name}'s books`);
            cursor= client.db("bookAppData").collection("books").find({"volumeInfo.authors": name },null,undefined); 
            await cursor.forEach(doc => {if(doc!=null){count++;fresult.push(doc);}});
            console.log(`Size: ${count}`);
            response.json(fresult);
        })

        //--Get--List a genre's books                                 Ex: http://localhost:5000/genreBooks?genre=scienceFiction
        app.get("/genreBooks", async (request, response)=>{
            var genre = String(request.query['genre']);
            var count =0;
            var cursor;
            var fresult =[];
            console.log(`Looking for books of genre: ${genre}`);
            cursor= client.db("bookAppData").collection("books").find({"volumeInfo.authors": name },null,undefined); 
            await cursor.forEach(doc => {if(doc!=null){count++;fresult.push(doc);}});
            console.log(`Size: ${count}`);
            response.json(fresult);
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


async function findOneElement(client){
    var result = await client.db("bookAppData").collection("books").findOne({"volumeInfo.industryIdentifiers.identifier": '9781101486405'});
    if(result){
        console.log(result);
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