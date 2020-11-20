var express = require('express')
var app = express();

var bodyParser = require('body-parser');
const { Console } = require('console');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime)
  
app.get('/greet',  function (req, res) {
  console.log('GET recieved: ' + req.requestTime);
  console.log(req.query);
  res.send('hello world!');
})
 
app.post('/greet', function (req, res) {
    console.log(req.body);
    console.log('POST')
    res.send('Hello there!')
})

app.delete('/greet', (req, res) => {
  console.log('DELETE')
  res.end();
})

app.put('/greet', (req, res) => {
  console.log('PUT')
  res.end();
})

app.listen(8088)
