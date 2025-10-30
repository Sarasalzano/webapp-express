//importo mysql
const mysql = require("mysql2");

//creo connessione al database
const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//gestione errori
connection.connect((err)=>{
if (err) throw err;
console.log("connected to mysql")
});

module.exports = connection;