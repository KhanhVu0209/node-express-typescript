export const queryUserRole = {
    insertUserRole: "insert into dbo.User_Role (Id, IdRole, IdUser) values (:Id, :IdRole, :IdUser)",
    getAllUserRoleByIdUser: "select * from User_Role where IdUser = :IdUser",
    deleteUserRoleByIdUser: "delete from User_Role where IdUser = :IdUser and IdRole not in (select Id from Role where RoleCode = 'AD')"
};