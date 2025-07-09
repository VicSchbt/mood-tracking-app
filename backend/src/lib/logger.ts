import winston from "winston";

const logger = winston.createLogger({
  level: "info", // Minimum level to log
  format: winston.format.combine(
    winston.format.colorize(), // Adds colors
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    // Uncomment below for optional log file
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

export default logger;
