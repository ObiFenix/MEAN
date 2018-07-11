// Load the express module and store it in the variable express (Where do you think this comes from?)copy
var express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoose = require('mongoose');
// invoke express and store the result in the variable app
var app = express();

//connect to DB
mongoose.connect('mongodb://localhost/quotes');

// model for DB
var QuotesShema = new mongoose.Schema({
  name: {type: String},
  quote: {type: String}
 },{timestamps: true})
 mongoose.model('Quotes', QuotesShema);
 var Quotes = mongoose.model('Quotes');

 mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true})); //To help work with HTTP POST Requests.

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
})) //This is to set up sessions

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/quotes',(req,res)=>{
  Quotes.find({}, null, {sort:'-date'}, (err,data)=>{
    res.render('quotes',{quotes:data})
  });
})

app.post('/quotes',(req,res)=>{
  var newQuote = new Quotes({name:req.body.name,quote: req.body.quote})
  newQuote.save((err) =>{
    res.redirect('/quotes') 
  })
})

app.listen(8000, function() {
})