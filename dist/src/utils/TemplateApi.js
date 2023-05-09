"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TemplateApi {
    constructor(payload, listPayload, message, success, pageNumber, pageSize, totalElement, totalPages) {
        this.payload = payload;
        this.listPayload = listPayload;
        this.message = message;
        this.success = success;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalElement = totalElement;
        this.totalPages = totalPages;
    }
}
exports.default = TemplateApi;
