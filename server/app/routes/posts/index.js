'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Post = mongoose.model('Post')

// Get all of the posts
router.get('/', function(req, res) {
  Post.find()
  .then(function(posts) {
    res.send(posts);
  })
});

// Get a single post
router.get('/:id', function(req, res) {
  Post.findById(req.params.id)
  .then(function(post) {
    res.send(post);
  })
});