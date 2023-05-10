"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryUsers = void 0;
exports.queryUsers = {
    getAllUser: "select Id, Fullname, Description, Email, Phone, UserTypeId, Address, Status, CreatedDate,\n" +
        "UserCode, IsLocked, IsDeleted, UnitId, IsActive, CreatedBy, ActiveCode, Avatar, SiteCode, BranchCode " +
        "from [dbo].[User] where IsDeleted = 0 order by CreatedDate desc",
    getAllUserAvailable: "select Id, Fullname, Description, Email, Phone, UserTypeId, Address, Status, CreatedDate,\n" +
        "UserCode, IsLocked, IsDeleted, UnitId, IsActive, CreatedBy, ActiveCode, Avatar, SiteCode, BranchCode " +
        "from [dbo].[User] where IsDeleted = 0 and IsActive = 1 order by CreatedDate desc",
    getAllUserBySiteCode: "select Id, Fullname, Description, Email, Phone, UserTypeId, Address, Status, CreatedDate,\n" +
        "UserCode, IsLocked, IsDeleted, UnitId, IsActive, CreatedBy, ActiveCode, Avatar, SiteCode, BranchCode " +
        "from [dbo].[User] where IsDeleted = 0 and IsActive = 1 and SiteCode = :SiteCode order by CreatedDate desc",
    getAllUserByBranchCode: "select Id, Fullname, Description, Email, Phone, UserTypeId, Address, Status, CreatedDate,\n" +
        "UserCode, IsLocked, IsDeleted, UnitId, IsActive, CreatedBy, ActiveCode, Avatar, SiteCode, BranchCode " +
        "from [dbo].[User] where IsDeleted = 0 and IsActive = 1 and BranchCode = :BranchCode order by CreatedDate desc",
    getByIdUser: "select Id, Fullname, Description, Email, Phone, UserTypeId, Address, Status, CreatedDate,\n" +
        "UserCode, IsLocked, IsDeleted, UnitId, IsActive, CreatedBy, ActiveCode, Avatar, SiteCode, BranchCode " +
        "from [dbo].[User] where Id = :Id",
    getUserByEmail: "select * from [dbo].[User] where Email = :Email",
    insertUser: "insert into dbo.[User] (Id, Fullname, Description, Password, Email, Phone, UserTypeId, Address," +
        "Status, CreatedDate, UserCode, IsLocked, IsDeleted, UnitId, IsActive, CreatedBy, ActiveCode, Avatar, SiteCode, BranchCode)" +
        "values (:Id, :Fullname, :Description, :Password, :Email, :Phone, :UserTypeId, :Address, 0, GETDATE(), :UserCode," +
        "0, 0, :UnitId, 0, :CreatedBy, :ActiveCode, :Avatar, :SiteCode, :BranchCode)",
    updateUser: "update [User] set Fullname = :Fullname, Description = :Description, Phone = :Phone," +
        "UserTypeId = :UserTypeId, Address = :Address, UnitId = :UnitId, Avatar = :Avatar, SiteCode = :SiteCode, BranchCode = :BranchCode\n" +
        "where Id = :Id",
    deleteUsers: "UPDATE [dbo].[User] SET IsDeleted = 1, Email = CONCAT(Email, '/', u.Id)\n" +
        "FROM [dbo].[User] u\n" +
        "WHERE u.Id IN (:Id)",
    hideUsers: "update [dbo].[User] set IsActive = :IsActive where Id In (:Id)",
    activeUserByCode: "update [dbo].[User] set IsActive = 1 where Id = :Id",
    updatePasswordUser: "update [dbo].[User] set Password = :Password where Id = :Id",
};
