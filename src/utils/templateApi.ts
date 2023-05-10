export class TemplateApi<T> {
    public readonly payload: T | null;
    public readonly listPayload: T[] | null;
    public readonly message: string;
    public readonly success: boolean;
    public readonly pageNumber: number;
    public readonly pageSize: number;
    public readonly totalElement: number;
    public readonly totalPages: number;

    constructor(
        payload: T | null,
        listPayload: T[] | null,
        message: string,
        success: boolean,
        pageNumber: number,
        pageSize: number,
        totalElement: number,
        totalPages: number,
    ) {
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
