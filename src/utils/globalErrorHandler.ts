import {NextFunction, Request, Response} from 'express';
import {TemplateApi} from "./templateApi";
import logger from "../config/logConfig";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    logger.error(`Đã xảy ra lỗi: ${err.stack}`);

    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    const results = new TemplateApi(null,
        null,
        "Đã xảy ra lỗi !",
        false,
        0,
        0,
        0,
        0);
    res.status(statusCode).json(results);
}
