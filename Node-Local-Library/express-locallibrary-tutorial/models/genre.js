let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema(
    {
        name: { type: String, require: true, min: 3, max: 100 },

    }
);

// URL required to get a particular instance of the model 
GenreSchema
  .virtual('url')
  .get(function() {
      return '/catalog/genre/' + this._id;
  });
  
module.exports = mongoose.model('Genre', GenreSchema);