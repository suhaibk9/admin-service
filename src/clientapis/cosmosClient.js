const { CosmosClient } = require('@azure/cosmos');
const {
  COSMOS_ENDPOINT,
  COSMOS_PRIMARY_KEY,
  COSMOS_DATABASE_ID,
  COSMOS_CONTAINER_ID,
} = require('../config/server.config');
//connecting your code to the Cosmos DB
const client = new CosmosClient({
  endpoint: COSMOS_ENDPOINT,
  key: COSMOS_PRIMARY_KEY,
});
//Connecting to the database and container
const database = client.database(COSMOS_DATABASE_ID);
const container = database.container(COSMOS_CONTAINER_ID);

async function logToCosmosDB(level, message) {
  try {
    //Inserting the log in the container
    //Structure of the log stored in the container is {timestamp, level, message}
    await container.items.create({
      timestamp: new Date().toISOString(),
      level: level,
      message: message,
    });
    console.log('Logged to CosmosDB');
  } catch (err) {
    console.log('Error in logging to CosmosDB');
    throw err;
  }
}
module.exports = { logToCosmosDB };
