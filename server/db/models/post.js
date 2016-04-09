'use strict';
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    tags: [{
        type: String
    }],
    date: { 
        type: Date, 
        default: Date.now 
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }
});

mongoose.model('Post', schema);