export const queryUserTypes = {
    getAllUserType: "select * from [dbo].[UserType]",
    getAllUserTypeById: "select * from [dbo].[UserType] where Id = :Id",
    getUserTypeByUserTypeCode: "select * from [dbo].[UserType] where TypeCode = :TypeCode",
};