const winston = require('winston');
require('winston-mongodb');
const { LOG_DB_URL } = require('./server.config');
const { Writable } = require('stream');
const { logToCosmosDB } = require('../clientapis/cosmosClient');
require('winston-mongodb');
const allowedTransports = [];
//Putting in CosmosDB
//Custom Transport
const customTransport = new Writable({
  write(chunk, encoding, callback) {
    const message = chunk.toString();
    console.log('Log Intercepted in Custom Transport', message);
    logToCosmosDB('error', message);
    callback();
  },
});
//Creating a Stream for the Custom Transport
const customTransportStream = new winston.transports.Stream({
  stream: customTransport,
});
//Adding the Custom Transport to the allowedTransports
allowedTransports.push(customTransportStream);
//Putting on Console
// allowedTransports.push(
//   //No levels are passed so it will log all levels
//   //No collection is passed so it will log in the default collection
//   //No db is passed so it will log in the default db
//   new winston.transports.Console({
//     //Overwriting the default
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.timestamp({
//         format: 'YYYY-MM-DD HH:mm:ss',
//       }),
//       winston.format.printf((log) => {
//         return `${log.timestamp} [${log.level}]: ${log.message}`;
//       })
//     ),
//   })
// );

//Putting in MongoDB
allowedTransports.push(
  new winston.transports.MongoDB({
    //Logging only error level logs
    //Log in the logs collection
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
  })
);
//Putting in File
allowedTransports.push(
  new winston.transports.File({
    //File Name and Path to store the logs
    filename: `${__dirname}/../logs/app.log`,
  })
);
const logger = winston.createLogger({
  //Default Format
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf((log) => {
      return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
    })
  ),
  transports: allowedTransports,
});
module.exports = logger;
