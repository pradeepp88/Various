
var express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressJwt = require('express-jwt');
const fs = require('fs')


const app = express();
var loginRouter = require('./routes/login');


// Add headers - solve CORS problem
app.use(function (req, res, next) {
  console.log('cors headers added')
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use('/', loginRouter);
const RSA_PUBLIC_KEY = fs.readFileSync('./public.key');

// validate the JWT with the public RSA key. 
// This key can be used to only validate existing JWTs, and not to create and sign new ones!
const checkIfAuthenticated = expressJwt({
    secret: RSA_PUBLIC_KEY
}); 

app.route('/api/lessons')
    .get(checkIfAuthenticated, () => {
      console.log('jwt token authenticated!')
    });

module.exports = app;

 


