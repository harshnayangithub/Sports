const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let selectedEvents = [];

app.get('/api/events', (req, res) => {
  res.json(selectedEvents);
});

app.post('/api/events', (req, res) => {
  selectedEvents = req.body;
  res.status(200).send('Events saved');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
