
var express = require("express"),
    app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');

app.get('/cats',(req,res)=>{
  res.render('cats')
})
app.get('/cat1',(req,res)=>{
  var cat = {name: 'Meowmer', food : 'human',age : 64, sleeps : ['dungeon','under your bed'] }
  res.render('details', {cat : cat})
})
app.get('/cat2',(req,res)=>{
  var cat = {name: 'Hairball', food : 'other cats',age : 1, sleeps : ['moon','closet'] }
  res.render('details', {cat : cat})
})
app.get('/cat3',(req,res)=>{
  var cat = {name: 'Karl', food : 'fish frys',age : 4, sleeps : ['car','barn'] }
  res.render('details', {cat : cat})
})
app.listen(8000, function() {
})