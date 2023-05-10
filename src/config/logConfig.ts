import winston, { Logger } from 'winston';
import { format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { combine, timestamp, prettyPrint } = format;

const dailyRotateFileTransport: DailyRotateFile = new DailyRotateFile({
    filename: 'log/daily-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '1g',
    maxFiles: '5d'
});

const logger: Logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        dailyRotateFileTransport
    ]
});

export default logger;
