// @ts-ignore
import jwt from 'jsonwebtoken';

interface TokenPayload {
    // define the properties of the payload object
    id: string;
    username: string;
    email: string;
}

export const createToken = (payload: TokenPayload): string => {
    // define secret key
    const secretKey = process.env.SECRET_KEY!;

    // define options
    const options: jwt.SignOptions = {
        expiresIn: '8h',   // token expiration time
        algorithm: 'HS256' // algorithm used to sign the token
    };

    return jwt.sign(payload, secretKey, options);
}
