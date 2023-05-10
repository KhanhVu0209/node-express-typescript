import {Sequelize} from 'sequelize'

// Option 3: Passing parameters separately (other dialects)
const databaseConfig = new Sequelize('PartyManagment', 'sa', 'P@ssw0rdSQL!@#11052022', {
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

interface IDb {
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
}

const db: IDb = {
    Sequelize,
    sequelize: databaseConfig,
};

export default db;