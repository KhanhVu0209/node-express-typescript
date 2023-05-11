export default interface CustomRequest extends Request {
    query: {
        pageNumber?: number;
        pageSize?: number;
    },
    params: {
        id: string;
    };
}
