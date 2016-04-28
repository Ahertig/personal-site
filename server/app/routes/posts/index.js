'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Post = mongoose.model('Post')
var jwt = require('jsonwebtoken');
var User = mongoose.model('User');


router.post('/login', function(req, res) {
  var payload = req.body;

  if (payload.email) {
    User.find({email: payload.email})
    .then(function(user) {
      console.log('wait this is da user', user)
      console.log('here are the passwords ', user[0].password, payload.password);
      if (user.password === payload.password) {
        var response = {
          data: {
            token: jwt.sign(payload, 'shhhhh')
          }
        }
        console.log('and here is the response', response)
        res.json(response);
      } else {
        // rejection message
      }
    })
  } else if (payload.phone) {

  }
});

router.get('/token-refresh', function(req, res) {
  // Post.find()
  // .then(function(posts) {
  //   res.json(posts);
  // })
});

router.get('/invalidate-token', function(req, res) {
  // Post.find()
  // .then(function(posts) {
  //   res.json(posts);
  // })
});





// Get all of the posts
router.get('/', function(req, res) {
  Post.find()
  .then(function(posts) {
    res.json(posts);
  })
});

// Get a single post
router.get('/:id', function(req, res) {
  Post.findById(req.params.id)
  .then(function(post) {
    res.json(post);
  })
});

// Get posts with this tag
router.get('/tags/:tag', function(req, res) {
  Post.retrievePostsByTag(req.params.tag)
  .then(function(posts) {
    console.log('here are the resulting posts: ', posts);
    res.json(posts);
  })
})







