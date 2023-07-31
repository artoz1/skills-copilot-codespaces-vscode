// Create web server with Node.js
// Created by Abhijeet Singh
// Created on June 27, 2017
// Last edited on June 27, 2017

var express = require('express');
var router = express.Router();

// Get comments page
router.get('/', function(req, res, next) {
  res.render('comments', { title: 'Comments' });
});

module.exports = router;