import {findAllUnit} from "../services/unitService";
import logger from "../config/logConfig";
import {TemplateApi} from "../utils/templateApi";
import Unit from "../models/unitModel";
import { Response } from 'express';

interface CustomRequest extends Request {
    query: {
        pageNumber?: number;
        pageSize?: number;
    };
}
export const FindAllUnit = async (req: CustomRequest, res: Response) => {
    const pageNumber = req.query.pageNumber || 0;
    const pageSize = req.query.pageSize || 0;

    const results: TemplateApi<Unit> = await findAllUnit(pageNumber, pageSize);
    logger.info("Lấy danh sách thành công !!!");
    
    return res.status(200).json(results);
};