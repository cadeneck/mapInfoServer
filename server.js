const env = require('dotenv').config();
const Interaction = require('./models/Interaction');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err + 'MongoDB connection error'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Server-side (e.g., in your Express route)
app.post('/api/logData', (req, res) => {
  const data = req.body;
  
  // Convert the timestamp string back to a Date object
  if (data.timestamp) {
      data.timestamp = new Date(data.timestamp);
  }
  
  const interaction = new Interaction(data);
  interaction.save()
      .then(result => res.json(result))
      .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
      });
});

