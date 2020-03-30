const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookSchema = new Schema(
    // {_id: String},
    { volumeInfo: { title: String, 
                    authors: String, 
                    publisher: String, 
                    publishedDate: String, 
                    description: String,
                    industryIdentifiers: { 
                        type: String, 
                        identifier: String 
                    }, 
                    pageCount: Number, 
                    categories: [String], 
                    averageRating: Number, 
                    imageLinks: { 
                        smallThumbnail: String, 
                        thumbnail: String 
                    } ,
                    numberOfRatings: Number, 
                    genre: String }, 
    saleInfo:{ 
        listPrice:{
            amount: Number}
        } }, {collection: "appBookData/books"}); 

const Books = mongoose.model('books', bookSchema);

module.exports = Books;

