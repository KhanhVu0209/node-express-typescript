import db from "../config/databaseConfig";
import {QueryTypes} from "sequelize";
import {HandleGetAllRespond} from "../utils/paginationUtils";
import {queryUnits} from "../queries/unitQuery";
import Unit from "../models/unitModel";
import {TemplateApi} from "../utils/templateApi";

export const findAllUnit = async (pageNumber: number, pageSize: number): Promise<TemplateApi<Unit>> => {
    let results: Unit[] = await db.sequelize.query(
        queryUnits.getAllUnit,
        {
            type: QueryTypes.SELECT
        }
    );

    return HandleGetAllRespond<Unit>(pageNumber, pageSize, results, results.length);
}