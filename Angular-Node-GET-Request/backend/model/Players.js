const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Player = new Schema({
  name: {
    type: String
  },
  score: {
    type: Number
  },
  unavailable: {
    type: Boolean// true
  },
  joined_game: {
    type: String //"Game A"
  }
}, {
  collection: 'players'
})

module.exports = mongoose.model('Player', Player)
