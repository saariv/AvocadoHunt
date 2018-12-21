// var mongoose = require('mongoose');
//
// var Schema = mongoose.Schema;
//
// var UserSchema = new Schema(
//   {
//     username: {type: String, required: true, max: 100},
//     score: {type: Number},
//   }
// );
//
// // Virtual for user's username
// UserSchema
// .virtual('username')
// .get(function () {
//   return this.username;
// });
//
// // Virtual for best score
// ScoreSchema
// .virtual('score')
// .get(function () {
//   return this.score;
// });
//
//
// //Export model
// module.exports = mongoose.model('Stats', UserSchema);
