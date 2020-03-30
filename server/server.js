const express = require("express");
const server = express();
const body_parser = require("body-parser");
// parse JSON (application/json content-type)
server.use(body_parser.json());
const port = 4000;
// << db setup >>
const db = require("./db");
const dbName = "appBookData";
const collectionName = "books";
// << db init >>
server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});


// const Express = require("express");
// const BodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
// const CONNECTION_URL = "mongodb+srv://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const DATABASE_NAME = "appBookData";
// var app = Express();
// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }));
// var database, collection;

// const config = {
//   autoIndex: false,
//   useNewUrlParser: true,
// };

// app.listen(3000, () => {
//     MongoClient.connect(CONNECTION_URL,  config, (error, client) => {
//         if(error) {
//             throw error;
//         }
//         database = client.db(DATABASE_NAME);
//         collection = database.collection("books");
//         console.log("Connected to `" + DATABASE_NAME + "`!");
//     });
// });



// app.get("/books", (request, response) => {
//   collection.find().toArray((error, result) => {
//       if(error) {
//           return response.status(500).send(error);
//       }
//       response.send(result);
//   });
// });




// mongodb+srv://dbUser:<password>@cluster0-y12qq.gcp.mongodb.net/test?retryWrites=true&w=majority 
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("bookAppData").collection("books");
//   // perform actions on the collection object

//   // listDatabases(client);

//   client.close();
// }); 


// async function listDatabases(client){
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net";
// const client = new MongoClient(uri, { useNewUrlParser: false });
// client.connect(err => {
//   const collection = client.db("appBookData").collection("books");
//   // perform actions on the collection object
//   client.close();
// });


// const express = require('express');
// const mongoose = require('mongoose');
// // const foodRouter = require('./routes/foodRoutes.js');

// const app = express();
// app.use(express.json()); // Make sure it comes back as json
// mongoose.set('bufferCommands', false);
// mongoose.connect('mongodb+srv://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net', {
//   useNewUrlParser: true
// });

// // app.use(foodRouter);
// const Schema = mongoose.Schema;

// const bookSchema = new Schema(
//   // {_id: String},
//   { volumeInfo: { title: String, 
//                   authors: String, 
//                   publisher: String, 
//                   publishedDate: String, 
//                   description: String,
//                   industryIdentifiers: { 
//                       type: String, 
//                       identifier: String 
//                   }, 
//                   pageCount: Number, 
//                   categories: [String], 
//                   averageRating: Number, 
//                   imageLinks: { 
//                       smallThumbnail: String, 
//                       thumbnail: String 
//                   } ,
//                   numberOfRatings: Number, 
//                   genre: String }, 
//   saleInfo:{ 
//       listPrice:{
//           amount: Number}
//       } }, {collection: "appBookData/books"}); 

// Auth = mongoose.model('books', bookSchema);
// Auth.findOne({}, function(err,obj) { console.log(obj); });



// app.listen(3000, () => { console.log('Server is running...') })
// var MyModel = mongoose.model('books',bookSchema );
// var result = MyModel.findOne();
// console.log("Howdy" + result.read);








// 'use strict';

// const mongodb = require('mongodb');
// const http = require('http');
// const nconf = require('nconf');
// let uri = "mongodb://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net";
// if (nconf.get('mongoDatabase')) {
//   uri = `${uri}/${nconf.get('mongoDatabase')}`;
// }
// console.log(uri);

// mongodb.MongoClient.connect(uri, (err, db) => {
//   if (err) {
//     throw err;
//   }

//   // Create a simple little server.
//   http.createServer((req, res) => {
//     if (req.url === '/_ah/health') {
//       res.writeHead(200, {
//         'Content-Type': 'text/plain'
//       });
//       res.write('OK');
//       res.end();
//       return;
//     }

//     const collection = db.collection('Messages');
//     var datetime = new Date();
//     const msg = {
//       msgDescription: '\nHello World received on ' + datetime
//     };

//     collection.insert(msg, (err) => {
//       if (err) {
//         throw err;
//       }

//       // push out a range
//       let msglist = '';
//       collection.find().toArray((err, data) => {
//         if (err) {
//           throw err;
//         }
//         data.forEach((msg) => {
//           msglist += `${msg.msgDescription}; `;
//         });

//         res.writeHead(200, {
//           'Content-Type': 'text/plain'
//         });
// res.write('Messages received so far:\n');
//         res.end(msglist);
//       });
//     });
//   }).listen(process.env.PORT || 5000, () => {
//     console.log('started web process');
//   });
// });









// 'use strict';

// const mongodb = require('mongodb');
// const http = require('http');
// const nconf = require('nconf');
// let uri = "mongodb+srv://dbUser:jaino@cluster0-y12qq.gcp.mongodb.net";
// if (nconf.get('mongoDatabase')) {
//   uri = `${uri}/${nconf.get('mongoDatabase')}`;
// }
// console.log(uri);

// mongodb.MongoClient.connect(uri, (err, db) => {
//   if (err) {
//     throw err;
//   }





//   // Create a simple little server.
//   http.createServer((req, res) => {
//     if (req.url === '/_ah/health') {
//       res.writeHead(200, { 
//         'Content-Type': 'text/plain'
//       });
//       res.write('OK');
//       res.end();
//       return;
//     }

//   //   const collectionBooks = db.collection('books');
//   //   let list = '';
//   //   collection.find().limit(5).toArray((err, data) => {
//   //     if (err) {
//   //       throw err;
//   //     }
//   //     data.forEach((msg) => {
//   //       list += `${msg.msgDescription}; `;
//   //     });
  
//   //     res.writeHead(200, {
//   //       'Content-Type': 'text/plain'
//   //     });
//   // res.write('Messages received so far:\n');
//   //     res.end(list);
//   //   });

//     const collection = db.collection('authorImages');
//     var datetime = new Date();
//     const msg = {
//       msgDescription:"https://openlibrary.org/images/icons/avatar_author-lg.png"
//     };
//       // push out a range
//       let msglist = '';
//       collection.find().limit(5).toArray((err, data) => {
//         if (err) {
//           throw err;
//         }
//         data.forEach((ai) => {
//           msglist += "msg";
//         });

//         res.writeHead(200, {
//           'Content-Type': 'text/plain'
//         });
//         res.write('Messages received so far:\n');
//         res.end(msglist);
//       });
//       // console.log(db.listCollections());
//   }).listen(process.env.PORT || 5000, () => {
//       console.log('started web process');
//   });
// });
// });
// // const express = require('express');
// // const cors = require('cors');
// // const mongoose = require('mongoose')

// // require('dotenv').config();


// // const MongoClient = require('mongodb').MongoClient;
// // const assert = require('assert');

// // const app = express();
// // const port = process.env.PORT || 5000;

// // app.use(cors());
// // app.use(express.json());


// // const uri = process.env.ATLAS_URI
// // mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// // );
// // const connection = mongoose.connection;
// // connection.once('open', () => {
// //   console.log("MongoDB database connection established successfully");
// // })

// // const booksRouter = require('./routes/book.js');
// // const authorsRouter = require('./routes/author.js');

// // app.use('/books', booksRouter);
// // app.use('/authors', authorsRouter);


// // app.listen(port, () => {
// //     console.log(`Server is running on port: ${port}`);
// // });


// // // // Connection URL

// // // // Database Name

// // // // Use connect method to connect to the server
// // // // MongoClient.connect(url, function(err, client) {
// // // // assert.equal(null, err);
// // // // console.log("Connected successfully to server");

// // // // const db = client.db(dbName);
// // // // // var str="";
// // // // // var cursor=db.collection('books').find();
// // // // // // console.log("Hello" +cursor)
// // // // // testWait();
// // // // // client.close();
// // // // // }); 
// // // const url = 'mongodb://35.223.29.106:80/bookAppData';
// // // const dbName = 'bookAppData';


// // // // move connecting to mongo logic into a function to avoid the "pyramid of doom"
// // // function getConnection(cb) {  
// // //     MongoClient.connect(url, function(err, db) {
// // //         if (err) return cb(err);
// // //         var accounts = db.collection("books");
// // //         cb(null, accounts);
// // //     })
// // // }    
// // // // list all of the documents by passing an empty selector.
// // // // This returns a 'cursor' which allows you to walk through the documents
// // // function readAll(collection, cb) {  
// // //    collection.find({}, cb);
// // // }

// // // function printAccount(account) {  
// // //     // make sure you found your account!
// // //     if (!account) {
// // //         console.log("Couldn't find the account you asked for!");
// // //     }
// // //     console.log("Account from Array "+ account);
// // // }

// // // // the each method allows you to walk through the result set, 
// // // // notice the callback, as every time the callback
// // // // is called, there is another chance of an error
// // // function printAccounts(accounts, cb) {  
// // //     accounts.each(function(err, account) {
// // //         if (err) return cb(err);
// // //         printAccount(account);
// // //     });
// // // }

// // // function get_accounts(cb) {  
// // //     getConnection(function(err, collection) {
// // //         if (err) return cb(err);    
// // //         // need to make sure to close the database, otherwise the process
// // //         // won't stop
// // //         function processAccounts(err, accounts) {
// // //             if (err) return cb(err);
// // //             // the callback to each is called for every result, 
// // //             // once it returns a null, you know
// // //             // the result set is done
// // //             accounts.each(function(err, account) {
// // //                 if (err) return cb(err)  
// // //                 if (false) {  
// // //                     printAccount(account);
// // //                 } else {
// // //                     collection.db.close();
// // //                     cb();
// // //                 }
// // //             })
// // //         }
// // //         readAll(collection, processAccounts);        
// // //     })
// // // }

// // // // Call the get_accounts function
// // // get_accounts(function(err) {  
// // //      if (err) {
// // //          console.log("had an error!", err);
// // //          process.exit(1);
// // //      }
// // // });




// // // // mongodb://35.223.29.106:80/bookAppData'
