'use strict';
// Libraries
var express = require('express');
var app = express();
var async = require('async');

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://avocadofarmer:Farmer2018@ds137404.mlab.com:37404/avocadogame';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//listen to the port 8080 or user's choice in terminal
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

//we use pug in views
app.set('view engine', 'pug');

//render pug page to mainmenu
app.get('/', (req, res) => {
    res.render('mainmenu')
})

//mainmenu page for the game
app.get('/mainmenu', (req, res) => {
    res.render('mainmenu')
})

//game page
app.get('/game', (req, res) => {
    res.render('game')
})

//about page
app.get('/about', (req, res) => {
    res.render('about')
})

//stats page
app.get('/stats', (req, res) => {
    res.render('stats')
})
//create user page
app.get('/score', (req, res) => {
    res.render('score')
})
//redirect to beginning
app.get('/', (req,res) =>{
        res.redirect('/mainmenu')
    })

//use libraries, js and css- files etc
app.use(express.static(__dirname + '/public'));


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
