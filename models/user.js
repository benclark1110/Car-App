const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  givenName: { 
    type: String, 
    required: true },
  familyName: { 
    type: String, 
    required: true },
  email: { 
    type: String, 
    required: true },
  imageUrl: { 
    type: String, 
    required: true }
  //   ,
  // car: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Car"
  // }
});

const User = mongoose.model("User", userSchema);

module.exports = User;