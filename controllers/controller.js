//import connection
const connection = require("../data/movies-db");

//index
function index(req, res){
    //prendi tutti i film
    const sql= "SELECT * FROM movies";
    connection.query(sql, (err, movies) => {
    //gestisci errori
    if (err) return res.status(500).json({error: "database query failed"});
    res.json(movies);
    })
}