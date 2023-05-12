import db from "../config/databaseConfig";
import {QueryTypes} from "sequelize";
import {HandleGetAllRespond, HandleGetByIdRespond} from "../utils/paginationUtils";
import {queryUnits} from "../queries/unitQuery";
import {TemplateApi} from "../utils/templateApi";
import UnitModel from "../models/unitModel";
import {queryDiary} from "../queries/diaryQuery";
import logger from "../config/logConfig";
import UnitPayload from "../payload/unitPayload";

export const findAllUnit = async (pageNumber: number, pageSize: number): Promise<TemplateApi<UnitModel>> => {
    const results = await db.sequelize.query<UnitModel>(
        queryUnits.getAllUnit,
        {
            type: QueryTypes.SELECT,
        }
    );

    return HandleGetAllRespond<UnitModel>(pageNumber, pageSize, results, results.length);
}

export const findUnitByUnitCode = async (pageNumber: number, pageSize: number, unitCode: string): Promise<TemplateApi<UnitModel>> => {
    const results = await db.sequelize.query<UnitModel>(
        queryUnits.getUnitByUnitCode,
        {
            replacements: {UnitCode: unitCode},
            type: QueryTypes.SELECT,
        });

    return HandleGetAllRespond<UnitModel>(pageNumber, pageSize, results, results.length);
}

export const findAllUnitAvailable = async (pageNumber: number, pageSize: number): Promise<TemplateApi<UnitModel>> => {
    const results = await db.sequelize.query<UnitModel>(
        queryUnits.getAllUnitAvailable,
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

export const deleteUnit = async (idsUnit: string, idUserCurrent: string, fullName: string) => {
    const tran = await db.sequelize.transaction();

    try {
        const lstIdUnit = await db.sequelize.query<UnitModel>(queryUnits.getUnitParentAndChill, {
            replacements: {Id: idsUnit},
            type: QueryTypes.SELECT,
            transaction: tran
        });

        await db.sequelize.query(queryUnits.deleteUnits, {
            replacements: {Id: idsUnit},
            type: QueryTypes.DELETE,
            transaction: tran
        });


        const queriesInsertDiary = lstIdUnit.map(object => {
            return db.sequelize.query(queryDiary.insertDiary, {
                replacements: {
                    Content: `${fullName} đã xóa từ bảng Unit`,
                    UserId: idUserCurrent,
                    Title: "Xóa từ CSDL",
                    Operation: "Delete",
                    Table: "Unit",
                    UserName: fullName,
                    WithId: object.id
                },
                type: QueryTypes.INSERT,
                transaction: tran
            });
        });
        await Promise.all(queriesInsertDiary);

        await tran.commit();
        logger.info("Xóa thành công !!!");
        return new TemplateApi(null, null, "Xóa thành công !", true, 0, 0, 0, 0);
    }
    catch (err) {
        logger.error(`Đã xảy ra lỗi: ${err}`);
        await tran.rollback();
        return new TemplateApi(null, null, "Xóa không thành công !", false, 0, 0, 0, 0);
    }
}

export const hideUnit = async (idsUnit: string, isHide: boolean, idUserCurrent: string, fullName: string) => {
    const tran = await db.sequelize.transaction();

    try {

        await db.sequelize.query(queryUnits.hideUnits, {
            replacements: {Id: idsUnit, IsHide: isHide},
            type: QueryTypes.UPDATE,
            transaction: tran
        });

        const lstIdUnit = await db.sequelize.query<UnitModel>(queryUnits.getUnitParentAndChill, {
            replacements: {ID: idsUnit},
            type: QueryTypes.SELECT,
            transaction: tran
        });

        const queriesInsertDiary = lstIdUnit.map(object => {
            return db.sequelize.query(queryDiary.insertDiary, {
                replacements: {
                    Content: `${fullName} đã ${isHide ? "kích hoạt" : "hủy kích hoạt"} Unit`,
                    UserId: idUserCurrent,
                    Title: "Cập nhật vào CSDL",
                    Operation: "Update",
                    Table: "Unit",
                    UserName: fullName,
                    WithId: object.id
                },
                type: QueryTypes.INSERT,
                transaction: tran
            });
        });
        await Promise.all(queriesInsertDiary);

        await tran.commit();

        logger.info(`${isHide ? "Kích hoạt" : "Hủy kích hoạt"} thành công !!!`);
        return new TemplateApi(null, null, `${isHide ? "Kích hoạt" : "Hủy kích hoạt"} thành công !!!`, true, 0, 0, 0, 0);
    } catch (error) {
        logger.error(`Đã xảy ra lỗi: ${error}`);
        await tran.rollback();
        return new TemplateApi(null, null, `${isHide ? "Kích hoạt" : "Hủy kích hoạt"} không thành công !!!`, false, 0, 0, 0, 0);
    }
}

export const createUnit = async (data: UnitPayload, idUserCurrent: string, fullName: string) =>   {
    const tran = await db.sequelize.transaction();

    try {
        await db.sequelize.query(queryUnits.insertUnit, {
            replacements: {
                Id: data.id,
                UnitName: data.unitName,
                ParentId: data.parentId,
                CreatedBy: idUserCurrent,
                UnitCode: data.unitCode
            }, type: QueryTypes.INSERT,
            transaction: tran
        });

        await db.sequelize.query(queryDiary.insertDiary, {
            replacements: {
                Content: `${fullName} đã thêm mới bảng Unit`,
                UserId: idUserCurrent,
                Title: "Thêm mới vào CSDL",
                Operation: "Create",
                Table: "Unit",
                UserName: fullName,
                WithId: data.id
            }, type: QueryTypes.INSERT,
            transaction: tran
        });

        await tran.commit();
        logger.info("Thêm mới thành công");
        return new TemplateApi(null, null, "Thêm mới thành công !", true, 0, 0, 0, 0);
    } catch (err) {
        logger.error(`Đã xảy ra lỗi: ${err}`);
        await tran.rollback();
        return new TemplateApi(null, null, "Thêm mới không thành công !", false, 0, 0, 0, 0);
    }
}

export const updateUnit = async (data: UnitPayload, idUserCurrent: string, fullName: string) => {
    const tran = await db.sequelize.transaction();

    try {
        await db.sequelize.query(queryUnits.updateUnit, {
            replacements: {
                Id: data.id,
                UnitName: data.unitName,
                ParentId: data.parentId,
                UnitCode: data.unitCode
            }, type: QueryTypes.INSERT,
            transaction: tran
        });

        await db.sequelize.query(queryDiary.insertDiary, {
            replacements: {
                Content: `${fullName} đã cập nhật bảng Unit`,
                UserId: idUserCurrent,
                Title: "Cập nhât vào CSDL",
                Operation: "Update",
                Table: "Unit",
                UserName: fullName,
                WithId: data.id
            }, type: QueryTypes.INSERT,
            transaction: tran
        });

        await tran.commit();
        logger.info("Cập nhật thành công");
        return new TemplateApi(null, null, "Cập nhật thành công !", true, 0, 0, 0, 0);
    } catch (e) {
        logger.error(`Đã xảy ra lỗi: ${e}`);
        await tran.rollback();
        return new TemplateApi(null, null, "Cập nhật không thành công !", false, 0, 0, 0, 0);
    }
}