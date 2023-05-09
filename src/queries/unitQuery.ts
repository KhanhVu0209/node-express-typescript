export const queryUnits = {
    getAllUnit: "select *from [dbo].[Unit] order by CreatedDate desc",
    getAllUnitAvailable: "select * from Unit where IsHide = 0 order by CreatedDate desc",
    getByIdUnit: "select *from [dbo].[Unit] where Id = :Id",
    getUnitByUnitCode: "select * from [dbo].[Unit] where UnitCode = :UnitCode",
    getUnitByParent: "select * from [dbo].[Unit] where ParentId = :ParentId",
    insertUnit: "insert into Unit (Id, UnitName, ParentId, Status, CreatedBy, CreatedDate, UnitCode, IsHide)\n" +
        "values (:Id, :UnitName, :ParentId, 0, :CreatedBy, GETDATE(), :UnitCode, 0)",
    updateUnit: "UPDATE Unit SET UnitName = :UnitName, ParentId = :ParentId, UnitCode = :UnitCode WHERE Id = :Id",
    deleteUnits: "WITH ret AS (\n" +
        "    SELECT Id, ParentId\n" +
        "    FROM Unit\n" +
        "    WHERE ID In (:Id)\n" +
        "    UNION ALL\n" +
        "    SELECT t.Id, t.ParentId\n" +
        "    FROM Unit t\n" +
        "    INNER JOIN ret r ON t.ParentId = r.Id\n" +
        ")\n" +
        "DELETE FROM [dbo].[Unit]\n" +
        "WHERE Id IN (\n" +
        "    SELECT Id\n" +
        "    FROM ret\n" +
        ")",
    hideUnits: "WITH ret AS (\n" +
        "    SELECT Id, ParentId\n" +
        "    FROM Unit\n" +
        "    WHERE ID In (:Id)\n" +
        "    UNION ALL\n" +
        "    SELECT t.Id, t.ParentId\n" +
        "    FROM Unit t\n" +
        "    INNER JOIN ret r ON t.ParentId = r.Id\n" +
        ")\n" +
        "UPDATE Unit\n" +
        "SET IsHide = :IsHide\n" +
        "WHERE Id IN (\n" +
        "    SELECT Id\n" +
        "    FROM ret\n" +
        ")",
    getUnitParentAndChill: "WITH ret AS(\n" +
        "                                            SELECT  *\n" +
        "                                            FROM    Unit\n" +
        "                                            WHERE   Id In (:Id)\n" +
        "                                            UNION ALL\n" +
        "                                            SELECT  t.*\n" +
        "                                            FROM    Unit t INNER JOIN\n" +
        "                                                    ret r ON t.ParentId = r.ID\n" +
        "                                    )\n" +
        "                                    SELECT  Id\n" +
        "                                    FROM ret",
};