const winston = require('winston');
const allowedTransports = [];
//If the environment is development then log the logs to the console
allowedTransports.push(new winston.transports.Console());
// allowedTransports.push(new winston.transports.File({});

const logger = winston.createLogger({
  format: winston.format.combine(
    //First Argument is the format of the timestamp
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    //Second Argument is the format of the log message
    //Level is the log level like info, error, warn etc
    winston.format.printf((log) => {
      return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
    })
  ),
  transports: allowedTransports,
});
module.exports = logger;
