import dotenv from "dotenv";
dotenv.config();
interface EnvironmentVar {
    SQL_HOST: string,
    SQL_PORT: number,
    SQL_USER: string,
    SQL_DATABASE_NAME: string,
    SECRET_KEY: string,
    SQL_PASSWORD: string,
    SERVER_PORT: number,
    UNIT_CODE: string,
    USER_TYPE_DEFAULT: string,
    ROLE_CODE_DEFAULT: string,
    SERVER_FILE_ROOT: string,
    SERVER_FILE_AVATAR: string,
    SERVER_FILE_MEDIA: string,
}
const env: EnvironmentVar = {
    SQL_HOST: process.env.SQL_HOST!,
    SQL_PORT: parseInt(process.env.SQL_PORT || '1436'),
    SQL_USER: process.env.SQL_USER!,
    SQL_DATABASE_NAME: process.env.SQL_DATABASE_NAME!,
    SECRET_KEY: process.env.SECRET_KEY!,
    SQL_PASSWORD: process.env.SQL_PASSWORD!,
    SERVER_PORT: parseInt(process.env.SERVER_PORT || '9000'),
    UNIT_CODE: process.env.UNIT_CODE!,
    USER_TYPE_DEFAULT: process.env.USER_TYPE_DEFAULT!,
    ROLE_CODE_DEFAULT: process.env.ROLE_CODE_DEFAULT!,
    SERVER_FILE_ROOT: process.env.SERVER_FILE_ROOT!,
    SERVER_FILE_AVATAR: process.env.SERVER_FILE_AVATAR!,
    SERVER_FILE_MEDIA: process.env.SERVER_FILE_MEDIA!,
}
export default env