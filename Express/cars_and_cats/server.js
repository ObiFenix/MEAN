// Load the express module and store it in the variable express (Where do you think this comes from?)copy
var express = require("express");
// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', (req,res) => {
   res.send('index.html');
})
app.get('cars.html',(req,res)=>{
  res.send('cars.html')
})
app.get('cats.html',(req,res)=>{
  res.send('cats.html')
})
app.get('form.html',(req,res)=>{
  res.send('form.html')
})
app.listen(8000, function() {
})