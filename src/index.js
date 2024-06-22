const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Server Configuration
const { PORT } = require('./config/server.config');
//API Router
const apiRouter = require('./routes/index');
//For handling the Body Parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
//Ping Check
app.get('/ping', (req, res) => {
  return res.json({ message: 'pong' });
});
//API Router start with /api this is the entry point
app.use('/api', apiRouter);
//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
