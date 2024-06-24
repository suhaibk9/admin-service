const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');
async function connectToDB() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (err) {
    console.log('Unable to connect to the database');
    console.log(err);
  }
}
module.exports = connectToDB;
