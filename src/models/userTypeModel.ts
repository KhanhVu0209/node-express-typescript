class UserType
{
    public id: any;
    public typeName: string;
    public status: number;
    public createBy: any;
    public createDate: Date;
    public typeCode: string;

    constructor (id: any,typeName: string,status: number,createBy: any,createDate: Date,typeCode: string)
    {
        this.id = id;
        this.typeName = typeName;
        this.status = status;
        this.createBy = createBy;
        this.createDate = createDate;
        this.typeCode = typeCode;
    }
}
export default UserType