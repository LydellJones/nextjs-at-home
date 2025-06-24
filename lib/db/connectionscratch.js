import mysql from 'mysql2/promise';
import { getAllAuthors, getAllDescriptions, getAllFileLists, getAllTitles, getTaskCount } from './tasks-back.js';
import { endConnections } from './connection.js';

// initial connection, lives as a global value for any connections made, 
// same could probably be accomplished with createConnection
export const conn = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

try {
    console.log("Contacting database...")
    await Promise.all([
    getAllAuthors().then((data) => console.log(data)).catch((err) => console.log(err)),
    getAllDescriptions().then((data) => console.log(data)).catch((err) => console.log(err)),
    getAllTitles().then((data) => console.log(data)).catch((err) => console.log(err)),
    getAllFileLists().then((data) => console.log(data)).catch((err) => console.log(err)),
    getTaskCount().then((data) => console.log(data)).catch((err) => console.log(err))])
    console.log("transactions entered")
} catch (err) {
    console.log("something didnt resolve")
} finally {
    //JANK, BUT IT'LL WORK!!!!!
    console.log("closing database...");
    await conn.end().then(console.log("server closed."));
    console.log("Done!");

    //WE JUST FIGURED OUT HOW TO CLEAN UP A FUCKING CONNECTION WHEN IT'S DONE RAAAAAAAAAHHHHHHHHHHHH
    /*for (const h of process._getActiveHandles()) {
        if (h.constructor.name === 'Socket') {
            h.destroy()
        }
    }*/

    //TODO: There definitely needs to be a solution for the fact that our pool connection is not terminated correctly if there's hanging sockets🫠

}


