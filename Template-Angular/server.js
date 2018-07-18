// Load the express module and store it in the variable express (Where do you think this comes from?)copy
var express = require("express"),
    app = express(),
    path = require('path'),
    mongoose   = require('./server/config/mongoose'),
    bodyParser = require('body-parser'),
    // session = require('express-session'),
    port       = 8000;

app.use(bodyParser.json()); //To help work with HTTP POST Requests.
app.use(express.static( __dirname + '/public/dist/public' ));

// app.use(session({
//   secret: 'keyboardkitteh',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// })) //This is to set up sessions

require('./server/config/routes.js')(app)





app.listen(port)