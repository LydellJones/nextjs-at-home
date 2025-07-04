import { commit, conn } from "./connection.js";

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
            resolve(result[0]);
        }).catch((err) => {
            console.error("[DB] error with task count select from tasks.");
            console.error(err);
            reject();
        });
    });
}

/** gets the description of a task */
export async function getAllDescriptions () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT description FROM tasks;")
        .then((result) => {
            resolve(result[0]);
        }).catch((err) => {
            console.error("[DB->Task] error with description select from tasks.");
            console.error(err);
            reject();
        });
    })
}
/** gets the title of a task */
export async function getAllTitles () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT title FROM tasks;")
        .then((result) => {
            resolve(result[0]);
        }).catch((err) => {
            console.error("[DB->Task] error with title select from tasks.");
            console.error(err);
            reject();
        });
    });
}

/** gets the associated file lists the user has attached onto a task */
export async function getAllFileLists () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT fileList FROM tasks;")
        .then((result) => {
            resolve(result[0]);
        }).catch((err) => {
            console.error("[DB->Task] error with fileList select from tasks.");
            console.error(err);
            reject();
        });
    });
}
/** gets the authors of a task */
export async function getAllAuthors () {
    return new Promise((resolve, reject) => {
        conn.query("SELECT author FROM tasks;")
            .then((result) => {
                resolve(result[0]);
            }).catch((err) => {
                console.error("[DB->Task] error with authors select from tasks.");
                console.error(err);
                reject();
            });
    });
}

export async function getAllTasks() {
    new Promise((resolve, reject) => {conn.query(`SELECT * FROM tasks;`)
        .then((result) => {
            resolve(result[0]);
        }).catch((err) => {
            console.error("[DB->Tasks] There was an issue with getting all tasks ");
            console.error(err);
            reject();
        });
    });
}

export async function insertTask(taskTitle, taskDesc, taskFiles, taskAuthor){
    conn.query(`INSERT INTO tasks (description, title, fileList, author) VALUES ? ? ? ?`, taskDesc, taskTitle, taskFiles, taskAuthor)
        .then((result) => {
            commit()
                .then(()=>{
                    resolve(result[0]);
                }).catch((err) => {
                    console.error("[DB] there was an issue with a commit");
                    console.error(err);
                    throw new Error("[DB] there was an issue making a commit");
                });
            
        }).catch((msg) => {
            console.error("[DB->Tasks] there was an issue with an task insert query");
            console.error(msg)
            reject();
        });
}