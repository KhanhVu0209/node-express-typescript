import {
    createUnit,
    deleteUnit,
    findAllUnit,
    findAllUnitAvailable,
    findUnitById,
    findUnitByUnitCode,
    hideUnit,
    updateUnit
} from "../services/unitService";
import logger from "../config/logConfig";
import {Response} from 'express';
import {validate} from "class-validator";
import UnitPayload from "../payload/unitPayload";
import {TemplateApi} from "../utils/templateApi";

const {v4: uuidv4} = require("uuid");

interface CustomRequest extends Request {
    query: {
        pageNumber?: number;
        pageSize?: number;
        unitCode?: string;
    },
    params: {
        id: string;
    },
    myCustomData: {
        userCurrentId: string;
        userCurrentName: string;
    }
}

export const FindAllUnit = async (req: CustomRequest, res: Response) => {
    const pageNumber = req.query.pageNumber || 0;
    const pageSize = req.query.pageSize || 0;

    const results = await findAllUnit(pageNumber, pageSize);
    logger.info("Lấy danh sách thành công !!!");

    return res.json(results);
};

export const FindAllUnitAvailable = async (req: CustomRequest, res: Response) => {
    const pageNumber = req.query.pageNumber || 0;
    const pageSize = req.query.pageSize || 0;

    const results = await findAllUnitAvailable(pageNumber, pageSize);
    logger.info("Lấy danh sách thành công !!!");

    return res.json(results);
};

export const FindUnitByCode = async (req: CustomRequest, res: Response) => {
    const pageNumber = req.query.pageNumber || 0;
    const pageSize = req.query.pageSize || 0;
    const unitCode = req.query.unitCode || '';

    const results = await findUnitByUnitCode(pageNumber, pageSize, unitCode);
    logger.info("Lấy danh sách thành công !!!");

    return res.json(results);
};

export const FindUnitById = async (req: CustomRequest, res: Response) => {
    const id: string = req.params.id;
    const results = await findUnitById(id);

    logger.info("Lấy thông tin thành công !!!");
    return res.json(results);
};

export const InsertUnit = async (req: CustomRequest, res: Response) => {
    // const userId = req.myCustomData.userCurrentId;
    // const fullName = req.myCustomData.userCurrentName;

    const data: UnitPayload = req.body as any;
    data.id = uuidv4();

    const validateObject = new UnitPayload(data.id, data.parentId ?? null, data.unitCode ?? null, data.unitName);
    const errors = await validate(validateObject);

    if (errors.length !== 0) {
        const errorMessages = errors.map(error => {
            const constraintMessages = Object.entries(error?.constraints ?? {}).map(([key, value]) => value);
            return constraintMessages.join(', ');
        });

        return res.json(new TemplateApi(null, null, errorMessages.join(', '), false, 0, 0, 0, 0));
    }

    const result = await createUnit(validateObject, uuidv4(), "fullName");
    return res.json(result);
};

export const UpdateUnit = async (req: CustomRequest, res: Response) => {
    const userId = req.myCustomData.userCurrentId;
    const fullName = req.myCustomData.userCurrentName;

    const data: UnitPayload = req.body as any;

    const validateObject = new UnitPayload(data.id, data.parentId ?? null, data.unitCode ?? null, data.unitName);
    const errors = await validate(validateObject);

    if (errors.length !== 0) {
        const errorMessages = errors.map(error => {
            const constraintMessages = Object.entries(error?.constraints ?? {}).map(([key, value]) => value);
            return constraintMessages.join(', ');
        });

        return res.json(new TemplateApi(null, null, errorMessages.join(', '), false, 0, 0, 0, 0));
    }

    const result = await updateUnit(validateObject, userId, fullName);
    return res.json(result);
};

export const HideUnits = async (req: CustomRequest, res: Response) => {
    const userId = req.myCustomData.userCurrentId;
    const fullName = req.myCustomData.userCurrentName;
    const {idsUnit, isHide} = req.body as any;

    const result = await hideUnit(idsUnit, isHide, userId, fullName);
    return res.json(result);
};

export const DeleteUnits = async (req: CustomRequest, res: Response) => {
    const userId = req.myCustomData.userCurrentId;
    const fullName = req.myCustomData.userCurrentName;
    const {idsUnit} = req.body as any;

    const result = await deleteUnit(idsUnit, userId, fullName);
    return res.json(result);
};