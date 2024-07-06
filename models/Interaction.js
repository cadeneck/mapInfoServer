const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema({
  timestamp: Date,
  actionType: String,
  chargingStation: String,
  button: String,
  coordinates: [Number],
  map: Number
});

const Interaction = mongoose.model('Interaction', InteractionSchema);
module.exports = Interaction;
