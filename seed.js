/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Post = Promise.promisifyAll(mongoose.model('Post'));

var users = [
    {
        email: 'alyssa@gmail.com',
        password: 'password'
    }
];

var posts = [
    {
        title: 'Here is a blog title',
        body: 'Blogs are splendiferous things',
        tags: 'blog'
    },
    {
        title: 'Here is a blog title',
        body: 'Blogs are weird things',
        tags: 'blog'
    },
    {
        title: 'Here is a blog title',
        body: 'Blogs are morbid things',
        tags: 'notBlog'
    }
];

var seedUsers = function () {
    return User.createAsync(users);
};

var seedPosts = function () {
    return Post.createAsync(posts);
};

connectToDb.then(function () {
    User.findAsync({}).then(function (users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    })
    .then(function(users) {
        posts[0].author = users[0]._id;
        posts[1].author = users[0]._id;
        posts[2].author = users[0]._id;
        return seedPosts();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});





