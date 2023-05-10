"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
// @ts-ignore
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = (password) => {
    const saltRounds = 10;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    const secretKey = process.env.SECRET_KEY;
    return bcrypt_1.default.hashSync(password, salt + secretKey);
};
exports.hashPassword = hashPassword;
