const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const problemModel=require('../src/models/problem.model')
const mongoose = require('mongoose');
//Server Configuration
const { PORT } = require('./config/server.config');
//API Router
const apiRouter = require('./routes/index');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
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
//Error Handler - Last Middleware if error comes
app.use(errorHandler);
//Server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
  console.log('Connected to the database');
 
});
