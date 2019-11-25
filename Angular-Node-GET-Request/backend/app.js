const Express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser"),
dataBaseConfig = require('./database/db');

var app = Express();
// const playerRoute = express.Router();
// console.log(playerRoute)

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Student model
let Player = require('./model/Players');


// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)
app.get("/", async (request, response) => {
  Player.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      response.json(data)
    }
  })
});

//routs
app.post("/", async (request, response) => {
  Player.create(request.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      response.json(data)
    }
  })
});




app.listen(3000, () => {
    console.log("Listening at :3000...");
});
