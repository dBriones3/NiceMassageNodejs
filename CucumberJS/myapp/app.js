var express = require('express');
var app = express();
const path = require('path');
const Messenger = require('../lib/messenger');
app.set('view engine', 'ejs');
app.use(express.urlencoded())

app.get('/', function (req, res) {
  //res.send('Hello World!');
  //res.sendFile('./views/index.html');
  res.render(path.join(__dirname+'/views/index')); 
});

app.post('/submit-form', (req, res) => {
  const hour = req.body.hour;
  const language = req.body.language;
  //...
  let mesenger;
  mesenger = new Messenger();
  
  var message = mesenger.getMessageWithHour(hour, language); 
  res.render(path.join(__dirname+'/views/message'), {message:message}); 
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});