const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema({
  userId: String,
  timestamp: Date,
  actionType: String,
  chargingStation: String,
  button: String,
  coordinates: [Number],
  map: Number
});

module.exports = mongoose.model('Interaction', InteractionSchema);
