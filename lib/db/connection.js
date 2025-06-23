import mysql from 'mysql2/promise';

/**
 * @description creates the connection that pages share. Because they're asynchronous we might need to use a pool instead of a single connection.
 */
export const conn = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database'
});

/**
 * @description ends the connection pool 
 */
export async function endConnections() {
    return new Promise((resolve,reject) => {
        conn.end().then(() => {
            resolve();
        }).catch(() => {
            console.log("[DB] failed to end connection... Connection is not stable.");
            reject();
        })
    });
}

/**
 * @description commits the connection, be sure to use this with queries
 */
export async function commit() {
    return new Promise((resolve, reject) => {
        conn.commit().then(() => {
            resolve();
        }).catch(() => {
            console.log("[DB] Unable too commit, changes were not saved...");
            reject();
        })
    })
}

/**
 * @description creates the tables needed
 */
export async function createTables() {
    return new Promise((resolve, reject) => {
        conn.query(`CREATE TABLE IF NOT EXISTS tasks 
        (
            id INT PRIMARY KEY AUTO_INCREMENT,
            description VARCHAR(32) NOT NULL,
            title VARCHAR(32) NOT NULL,
            fileList JSON,
            author VARCHAR(32)
        ) ;`.replace('\n', ''))
         .then(resolve())
         .catch((error) =>{
            console.log('[DB] unable to create table "tasks"')
            reject();
        })
    })
}