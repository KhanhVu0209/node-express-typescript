
export const queryRole = {
    getAllRole: "select * from [dbo].[Role] where IsDeleted = 0",
    getByIdRole: "SELECT * FROM Role WHERE Id = :Id",
    getByRoleCode: "SELECT * FROM Role WHERE RoleCode = :RoleCode",
    getAllInformRoleOfUser: "SELECT r.Id 'IdRole', r.RoleName 'NameRole', u.Id 'IdUser', IIF(r.RoleCode = 'AD', 1, 0) 'IsAdmin'  \n" +
        "FROM [dbo].[User] u left join User_Role ur on u.Id = ur.IdUser left join Role r on r.Id = ur.IdRole where u.Id = :Id",
};