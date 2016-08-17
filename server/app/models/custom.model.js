
/**
  *
  * Custom Model
  * field: email, password, user_type
  *
  */

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var CustomSchema = new Schema({
    firstname  :  { type: String },
    lastname   :  { type: String },
  	email	     :  { type: String, required: true, unique: true },
  	password   :  { type: String, required: true },
    user_type  :  { type: String }
  });

  module.exports = mongoose.model('Custom', CustomSchema);