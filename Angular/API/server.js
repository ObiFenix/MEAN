// Load the express module and store it in the variable express (Where do you think this comes from?)copy
var express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoose = require('mongoose');
// invoke express and store the result in the variable app
var app = express();

app.use(bodyParser.json()); //To help work with HTTP POST Requests.
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
})) //This is to set up sessions

//connect to DB
mongoose.connect('mongodb://localhost/TEST');

// model for DB
var ModelShema = new mongoose.Schema({
  name: {type: String}
 },{timestamps: true})

 mongoose.model('Model', ModelShema);
 var Model = mongoose.model('Model');


app.get('/',(req,res)=>{
  res.json({message: "TEST"})
})
app.listen(8000, function() {
})