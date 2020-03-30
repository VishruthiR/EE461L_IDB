const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  _id: String
},{collection: 'authorImages'});

const Authors = mongoose.model('authorImages', exerciseSchema);

module.exports = Authors;