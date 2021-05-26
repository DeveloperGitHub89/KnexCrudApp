import * as dotenv from 'dotenv';
dotenv.config();
export const DbConfig = {
    client: process.env.DB_DIALECT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
}
