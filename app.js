//I am requiring the express module and then setting up the server port and view engine.

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dbconfig = require('./dbconfig');
var userController = require('./controllers/userController');
var companyController = require('./controllers/companyController');
var apiUserEndPoints = require('./controllers/apiUserEndPoints');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'handlebars');

mongoose.connect(dbconfig.getDbConnectionString());

userController(app);
companyController(app);
apiUserEndPoints(app);

app.listen(port);
