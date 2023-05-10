"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const databaseConfig = new sequelize_1.Sequelize('PartyManagment', 'sa', 'P@ssw0rdSQL!@#11052022', {
    host: '115.74.201.161',
    dialect: 'mssql',
    port: 36900,
    logging: false,
    dialectOptions: {
        options: {
            encrypt: true
        }
    }
});
const db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize: databaseConfig,
};
exports.default = db;
