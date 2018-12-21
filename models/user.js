'use strict';
//require mongoose

var mongoose = require('mongoose');
//define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: {type: String, required: true, max: 100},
    score: {type: Number, required: true},
    level: {type: Number, required: true},
  }
);

// Virtual for username
UserSchema
.virtual('username')
.get(function () {
  return this.username;
});

// Virtual for user scores
UserSchema
.virtual('score')
.get(function () {
  return (this.score);
});

// Virtual for level
UserSchema
.virtual('level')
.get(function () {
  return (this.level);
});

//compile model from schema
var UserModel = mongoose.model('Users', UserSchema);
//Export model
module.exports = mongoose.model('Users', UserSchema);
