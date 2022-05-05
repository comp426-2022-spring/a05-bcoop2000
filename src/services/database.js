// Put your database code here
const database = require("better-sqlite3")

const logdb = new database("log.db")

// now to initialize database

const stmt = logdb.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`);
let row = stmt.get();

// Check if row exists and make database if not
if (row === undefined) {
// Keep console dictating what gets done
    console.log("Initializing database...");
// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE accesslog ( 
            id INTEGER PRIMARY KEY, 
            remoteaddr TEXT,
            remoteuser TEXT,
            time INTEGER,
            method TEXT,
            url TEXT,
            protocol TEXT,
            httpversion TEXT,
            status INTEGER, 
            referrer TEXT,
            useragent TEXT 
            );
    `
    logdb.exec(sqlInit);
} else {
// database exists already
    console.log('Database already exists.')
}
// Export as module to use in server
module.exports = logdb;