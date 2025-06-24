import { conn } from "./connection.js";

/**
 * //////////////////////////////////////////
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *     Warning - the rejects on the promises do nothing ON ANY OF THE FUNCTIONS BELOW please fix this!
 * //////////////////////////////////////////
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

/**  returns a key pair for the amount of tasks(records from tasks) that are in the database*/
export async function getTaskCount () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT Count(*) FROM tasks;")
        .then((result) => {
            resolve(result[0])
        }).catch((err) => {
            console.log("[DB] error with description select from tasks.");
            console.log(err);
            reject();
        });
    });
}

/** gets the description of a task */
export async function getAllDescriptions () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT description FROM tasks;")
        .then((result) => {
            resolve(result[0])
        }).catch((err) => {
            console.log("[DB] error with description select from tasks.");
            console.log(err);
            reject();
        });
    })
}
/** gets the title of a task */
export async function getAllTitles () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT title FROM tasks;")
        .then((result) => {
            resolve(result[0])
        }).catch((err) => {
            console.log("[DB] error with description select from tasks.");
            console.log(err);
            reject();
        });
    });
}

/** gets the associated file lists the user has attached onto a task */
export async function getAllFileLists () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT fileList FROM tasks;")
        .then((result) => {
            resolve(result[0])
        }).catch((err) => {
            console.log("[DB] error with description select from tasks.");
            console.log(err);
            reject();
        });
    });
}
/** gets the authors of a task */
export async function getAllAuthors () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT author FROM tasks;")
        .then((result) => {
            resolve(result[0])
        }).catch((err) => {
            console.log("[DB] error with description select from tasks.");
            console.log(err);
            reject();
        });
    });
}