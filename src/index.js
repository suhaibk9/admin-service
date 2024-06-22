const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
