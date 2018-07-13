// Load the express module and store it in the variable express (Where do you think this comes from?)copy
var express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    flash = require('express-flash'),
    validate = require('mongoose-validator');
// invoke express and store the result in the variable app
var app = express();

app.use(bodyParser.urlencoded({extended: true})); //To help work with HTTP POST Requests.
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
})) //This is to set up sessions

//connect to DB
mongoose.connect('mongodb://localhost/user');

// validations
var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only',
  }),
]
var emailValidator = [
  validate({
    validator: 'isLength',
    arguments: [1, 80],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isEmail',
    passIfEmpty: true,
    message: 'Email must be a valid email',
  }),
  // validate({
  //   validator: function(val) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         User.count({email:val}, (err,data)=>{
  //         resolve(data == 0)
  //         })
  //       }, 500)
  //     })
  //   },
    // message: 'This email already exists.',
  // })
]
var passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [8, 150],
    message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
]


// model for DB
var UserShema = new mongoose.Schema({
  email: {type: String, required: true, unique: true,trim: true, validate:emailValidator},
  first_name: {type: String, required: true,trim: true, validate: nameValidator},
  last_name: {type: String, required: true,trim: true, validate: nameValidator},
  password: {type: String, required: true,trim: true, validate: passwordValidator},
  birthday: {type: Date, required: true,trim: true},
 },{timestamps: true})
 mongoose.model('User', UserShema);
 var User = mongoose.model('User');





app.get('/',(req,res)=>{

  res.render('index')
})

app.post('/register',(req,res)=>{
  if(req.body.confirm_pw != req.body.password){
    
  }
  bcrypt.hash('bacon', 8, (err, hash) =>{
    var newUser = new User({email:req.body.email,first_name:req.body.first_name,last_name:req.body.last_name,password:hash,birthday:req.body.birthday})
    newUser.save((err,data) =>{
      if(err){
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
      }
        res.redirect('/',)
      }
      else{    
        
      }
    })
  })
})

app.post('/login',(req,res)=>{
  User.findOne({email:req.body.login_email},(err,data)=>{
    if(data){
      bcrypt.compare(req.body.login_password, data.password, (err, x) =>{
        if(err){
          console.log(err);
          res.redirect('/')
        }
        else{
        res.redirect('/success')
        }  
        
      });
    }
    else{
      res.redirect('/')
    }
  })

})

app.get('/success',(req,res)=>{
  User.find({},(err,data)=>{
    res.render('success',{users:data})
  })
})

app.listen(8000, function() {
})

bcrypt.hash('bacon', 8, (err, hash) => {
});