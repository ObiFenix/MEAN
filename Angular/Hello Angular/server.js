// Load the express module and store it in the variable express (Where do you think this comes from?)copy
var express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'); 
// invoke express and store the result in the variable app
var app = express();

app.use(bodyParser.urlencoded({extended: true})); //To help work with HTTP POST Requests.

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
})) //This is to set up sessions

app.use(express.static( __dirname + '/public/dist/public' ));
// app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index')
})
app.listen(8000, function() {
})