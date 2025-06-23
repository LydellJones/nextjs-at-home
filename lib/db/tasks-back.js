import { conn } from "./connectionscratch";

export async function getTaskCount () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT  FROM tasks;")
        .then((result) => {
            resolve(result[0])
        }).catch((err) => {
            console.log("[DB] error with description select from tasks.");
            console.log(err);
            reject();
        });
    });
}

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

export async function getAllTitles () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT description FROM tasks;")
        .then((result) => {
            resolve(result[0])
        }).catch((err) => {
            console.log("[DB] error with description select from tasks.");
            console.log(err);
            reject();
        });
    });
}

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
