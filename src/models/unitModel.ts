class Unit
{
    public id: any;
    public unitName: string;
    public parentId: any;
    public status: number;
    public createdBy: any;
    public createdDate: Date;
    public unitCode: string;
    public isHide: boolean;

    constructor (id: any,unitName: string,parentId: any,status: number,createdBy: any,createdDate: Date,unitCode: string,isHide: boolean)
    {
        this.id = id;
        this.unitName = unitName;
        this.parentId = parentId;
        this.status = status;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.unitCode = unitCode;
        this.isHide = isHide;
    }
}
export default Unit