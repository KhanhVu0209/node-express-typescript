"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_2 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const { combine, timestamp, prettyPrint } = winston_2.format;
const dailyRotateFileTransport = new winston_daily_rotate_file_1.default({
    filename: 'log/daily-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '1g',
    maxFiles: '5d'
});
const logger = winston_1.default.createLogger({
    level: 'info',
    format: combine(timestamp(), prettyPrint()),
    transports: [
        new winston_1.default.transports.Console(),
        dailyRotateFileTransport
    ]
});
exports.default = logger;
