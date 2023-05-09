// @ts-ignore
import { TemplateApi } from './templateApi';

export const HandleGetAllRespond = (
    pageNumber: number,
    pageSize: number,
    results: object[],
    totalElement: number
): TemplateApi => {

    if (pageNumber !== 0 && pageSize !== 0) {
        if (pageNumber < 0) {
            pageNumber = 1;
        }
        results = results.slice(
            (pageNumber - 1) * pageSize,
            pageNumber * pageSize
        );
    }
    const numPagesize: number = pageSize === 0 ? 1 : pageSize;

    if (results.length === 0) {
        return new TemplateApi(
            null,
            null,
            "Không tồn tại dữ liệu !",
            false,
            0,
            0,
            0,
            0
        );
    }

    return new TemplateApi(
        null,
        results,
        "Lấy danh sách thành công !",
        true,
        pageNumber,
        pageSize,
        totalElement,
        Math.round(totalElement / numPagesize)
    );
}

export const HandleGetByIdRespond = (
    results: object[]
): TemplateApi => {
    if (results.length === 0 || results[0] == null) {
        return new TemplateApi(
            null,
            null,
            "Không tồn tại dữ liệu !",
            false,
            0,
            0,
            0,
            0
        );
    }

    return new TemplateApi(
        results,
        null,
        "Lấy thông tin thành công !",
        true,
        0,
        0,
        results.length,
        0
    );
}
