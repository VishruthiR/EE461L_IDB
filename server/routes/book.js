const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then(console.log("Hello World\n"))
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;