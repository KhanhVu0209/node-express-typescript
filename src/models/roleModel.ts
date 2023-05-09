class Role
{
    public id: any;
    public roleName: string;
    public status: number;
    public isDeleted: boolean;
    public isAdmin: boolean;
    public numberRole: number;
    public roleCode: string;

    constructor (id: any,roleName: string,status: number,isDeleted: boolean,isAdmin: boolean,numberRole: number,roleCode: string)
    {
        this.id = id;
        this.roleName = roleName;
        this.status = status;
        this.isDeleted = isDeleted;
        this.isAdmin = isAdmin;
        this.numberRole = numberRole;
        this.roleCode = roleCode;
    }
}
export default Role