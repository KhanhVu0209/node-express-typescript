// @ts-ignore
import bcrypt from "bcrypt";

export const hashPassword = (password: string): string => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const secretKey = process.env.SECRET_KEY!;
    return bcrypt.hashSync(password, salt + secretKey);
}
