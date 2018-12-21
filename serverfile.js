'use strict';
// Libraries
var express = require('express');
var app = express();


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
app.get('/user', (req, res) => {
    res.render('user')
})
//redirect to beginning
app.get('/', (req,res) =>{
        res.redirect('/mainmenu')
    })

//use libraries, js and css- files etc
app.use(express.static(__dirname + '/public'));
