import db from "../config/databaseConfig";
import {QueryTypes} from "sequelize";
import {HandleGetAllRespond} from "../utils/paginationUtils";
import {queryUnits} from "../queries/unitQuery";
import {TemplateApi} from "../utils/templateApi";
import Unit from "../models/unitModel";

export const findAllUnit = async (pageNumber: number, pageSize: number): Promise<TemplateApi<Unit>> => {
    let results = await db.sequelize.query<Unit>(
        queryUnits.getAllUnit,
        {
            type: QueryTypes.SELECT,
        }
    );

    return HandleGetAllRespond<Unit>(pageNumber, pageSize, results, results.length);
}