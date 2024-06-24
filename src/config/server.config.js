const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PORT: process.env.PORT || 8000,
  ATLAS_DB_URL: process.env.ATLAS_DB_URL,
  LOG_DB_URL: process.env.LOG_DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
  COSMOS_PRIMARY_KEY: process.env.COSMOS_PRIMARY_KEY,
  COSMOS_DATABASE_ID: process.env.COSMOS_DATABASE_ID,
  COSMOS_CONTAINER_ID: process.env.COSMOS_CONTAINER_ID,
};
