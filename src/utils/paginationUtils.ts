import {TemplateApi} from './templateApi';
import {camelCase} from "lodash";
function toCamelCase<T>(results: object[]): T[] {
    return results.map((obj) => {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [camelCase(key), value])
        ) as T;
    });
}
export function HandleGetAllRespond<T>(
    pageNumber: number,
    pageSize: number,
    results: object[] | null,
    totalElement: number
) {

    if (!results) {
        return new TemplateApi<T>(
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

    if (pageNumber !== 0 && pageSize !== 0) {
        if (pageNumber < 0) {
            pageNumber = 1;
        }
        results = results?.slice(
            (pageNumber - 1) * pageSize,
            pageNumber * pageSize
        );
    }
    const numPagesize: number = pageSize === 0 ? 1 : pageSize;

    return new TemplateApi<T>(
        null,
        toCamelCase(results),
        "Lấy danh sách thành công !",
        true,
        pageNumber,
        pageSize,
        totalElement,
        Math.round(totalElement / numPagesize)
    );
}

// export const HandleGetByIdRespond = (
//     results: object[]
// ) => {
//     if (results.length === 0 || results[0] == null) {
//         return new TemplateApi(
//             null,
//             null,
//             "Không tồn tại dữ liệu !",
//             false,
//             0,
//             0,
//             0,
//             0
//         );
//     }
//
//     return new TemplateApi(
//         results,
//         null,
//         "Lấy thông tin thành công !",
//         true,
//         0,
//         0,
//         results.length,
//         0
//     );
// }
