"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const HashPassword = (password) => {
    const saltRounds = 10;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    const secretKey = process.env.SECRET_KEY;
    return bcrypt_1.default.hashSync(password, salt + secretKey);
};
exports.HashPassword = HashPassword;
