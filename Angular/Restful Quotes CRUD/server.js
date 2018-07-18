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
mongoose.connect('mongodb://localhost/quotes');

// model for DB
var QuotesShema = new mongoose.Schema({
  name: {type: String},
  quote: {type: String}
 },{timestamps: true})

 mongoose.model('Quote', QuotesShema);
 var Quote = mongoose.model('Quote');

app.get('/quotes',(req,res)=>{
  Quote.find({}, function(err, quotes){
    if(err){
      console.log("Returned error", err);
      res.json({message: "Error", error: err})
    }
    else {
      res.json({message: "Success", quotes: quotes})
    }
 })
})

app.post('/new',(req,res)=>{
  let newQuote = new Quote({name:req.body.name,quote: req.body.quote})
  newQuote.save((err)=>{
    if(err){
      console.log("Returned error", err);
      res.json({message: "Error", error: err})
   }
   else{
    res.json({message: "Success"})
   }
  })
})

app.post('/delete',(req,res)=>{
  Quote.deleteOne({_id:req.body.id},(err)=>{
    if(err){
      console.log("Returned error", err);
      res.json({message: "Error", error: err})
   }
   else{
    res.json({message: "Deleted Record"})
   }
  })
})

app.post('/quote_info',(req,res)=>{
  Quote.find({_id:req.body.id},(err, quote_info)=>{
    if(err){
      console.log("Returned error", err);
      res.json({message: "Error", error: err})
    }
    else {
      res.json(quote_info[0])
    }
 })
})

app.post('/update',(req,res)=>{
  Quote.find({_id:req.body.id},(err, quote)=>{
    if(err){
      console.log("Returned error", err);
      res.json({message: "Error", error: err})
    }
    else {
      console.log(req.body.quote);
      
      quote[0].quote = req.body.quote;
      quote[0].name = req.body.name;
      quote[0].save((err)=>{
        console.log(quote[0]);
        if(err){
          console.log("Returned error", err);
          res.json({message: "Error", error: err})
        }
        else{
          res.json({message: "Success"})
        }
      })
    }
 })
})

app.listen(8000, function() {
})