// Load the express module and store it in the variable express (Where do you think this comes from?)copy
var express = require("express");
// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');

app.get('/cars',(req,res)=>{
  res.render('cars')
})
app.get('/cats',(req,res)=>{
  res.render('cats')
})
app.get('/cars/new',(req,res)=>{
  res.render('form')
})
app.listen(8000, function() {
})