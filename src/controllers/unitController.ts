import {findAllUnit, findUnitById} from "../services/unitService";
import logger from "../config/logConfig";
import {Response} from 'express';
import CustomRequest from "../utils/customRequest";

export const FindAllUnit = async (req: CustomRequest, res: Response) => {
    const pageNumber = req.query.pageNumber || 0;
    const pageSize = req.query.pageSize || 0;

    const results = await findAllUnit(pageNumber, pageSize);
    logger.info("Lấy danh sách thành công !!!");

    return res.json(results);
};

export const FindUnitById = async (req: CustomRequest, res: Response) => {
    const id: string = req.params.id;
    const results = await findUnitById(id);

    logger.info("Lấy thông tin thành công !!!");
    return res.json(results);
};