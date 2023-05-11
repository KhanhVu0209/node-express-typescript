import db from "../config/databaseConfig";
import {QueryTypes} from "sequelize";
import {HandleGetAllRespond, HandleGetByIdRespond} from "../utils/paginationUtils";
import {queryUnits} from "../queries/unitQuery";
import {TemplateApi} from "../utils/templateApi";
import UnitModel from "../models/unitModel";

export const findAllUnit = async (pageNumber: number, pageSize: number): Promise<TemplateApi<UnitModel>> => {
    let results = await db.sequelize.query<UnitModel>(
        queryUnits.getAllUnit,
        {
            type: QueryTypes.SELECT,
        }
    );

    return HandleGetAllRespond<UnitModel>(pageNumber, pageSize, results, results.length);
}

export const findUnitById = async (idUnit: string): Promise<TemplateApi<UnitModel>> => {
    const results = await db.sequelize.query<UnitModel>(queryUnits.getByIdUnit, {
        replacements: {Id: idUnit},
        type: QueryTypes.SELECT,
    });

    return HandleGetByIdRespond<UnitModel>(results);
}