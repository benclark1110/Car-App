const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  carName: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  mileage: { type: Number, required: true },
  user: { type: String, required: false },
  lastOilChange: { type: Number, required: true },
  lastTireRotation: { type: Number, required: true },
  lastNewBrake: { type: Number, required: true }
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;