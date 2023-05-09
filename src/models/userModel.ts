class User {
    public id: any;
    public fullname: string;
    public description: string;
    public password: string;
    public email: string;
    public phone: string;
    public userTypeId: any;
    public address: string;
    public status: number;
    public createdDate: Date;
    public userCode: string;
    public isLocked: boolean;
    public isDeleted: boolean;
    public unitId: any;
    public isActive: boolean;
    public createdBy: any;
    public activeCode: string;
    public avatar: string;
    public siteCode: string;
    public branchCode: string;

    constructor(id: any, fullname: string, description: string, password: string, email: string, phone: string, userTypeId: any, address: string, status: number, createdDate: Date, userCode: string, isLocked: boolean, isDeleted: boolean, unitId: any, isActive: boolean, createdBy: any, activeCode: string, avatar: string, siteCode: string, branchCode: string) {
        this.id = id;
        this.fullname = fullname;
        this.description = description;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.userTypeId = userTypeId;
        this.address = address;
        this.status = status;
        this.createdDate = createdDate;
        this.userCode = userCode;
        this.isLocked = isLocked;
        this.isDeleted = isDeleted;
        this.unitId = unitId;
        this.isActive = isActive;
        this.createdBy = createdBy;
        this.activeCode = activeCode;
        this.avatar = avatar;
        this.siteCode = siteCode;
        this.branchCode = branchCode;
    }
}

export default User