import {Sequelize} from 'sequelize'
import env from "../utils/environmentVar";

// Option 3: Passing parameters separately (other dialects)
const databaseConfig = new Sequelize(env.SQL_DATABASE_NAME, env.SQL_USER, env.SQL_PASSWORD, {
    host: env.SQL_HOST,
    dialect: 'mssql',
    port: env.SQL_PORT,
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