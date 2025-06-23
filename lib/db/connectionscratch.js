import mysql from 'mysql2/promise';

export const conn = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database'
});



await conn.end();

