var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('port', process.env.PORT || 8000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res) {
    res.sendFile('./app/index.html');
});

app.use(function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

// Start Server
app.listen(app.get('port'), function () {
    console.log( "Express server listening on port " + app.get('port'));
});
