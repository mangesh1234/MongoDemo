var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  console.log('hello');
// var config = require('./db.js');
// console.log('config', config.Url);
var Url = 'mongodb://127.0.0.1:27017/NewNodeApi';
var connectToMongo = function() {
    console.log('hello');
     mongoose.connect(Url);;
    db = mongoose.connection;
    db.on('error', function onError(err) {
        console.log('Connection to Mongo Unsuccessful: ' + err);
    });

    // When the connection is disconnected
    db.on('disconnected', function() {
        console.log('Mongoose default connection disconnected');
    });

    // When successfully connected
    db.on('connected', function() {
        console.log('Mongoose default connection open');
    });

    db.once('open', function callback() {
        console.log('Connection to Mongo Successful');
        
    });
};

module.exports.connectToMongo = connectToMongo;