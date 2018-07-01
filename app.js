var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'handlebars');


//Just a quick test !
app.get('/', function(req, res){
  console.log("Show me the page");
  res.send("Send me to the browser!");
});

app.listen(port);
