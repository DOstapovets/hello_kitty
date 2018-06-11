var express = require('express');
var app = express();

app.use(express.static('dist'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening. Press CTRL + http://localhost:8080!');
});