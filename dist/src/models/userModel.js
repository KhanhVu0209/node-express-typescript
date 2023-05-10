"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, fullname, description, password, email, phone, userTypeId, address, status, createdDate, userCode, isLocked, isDeleted, unitId, isActive, createdBy, activeCode, avatar, siteCode, branchCode) {
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
exports.default = User;
