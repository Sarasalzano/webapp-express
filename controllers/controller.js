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

//show
function show(req, res){
    const id = req.params.id
    //prendi solo un film
    const sql ="SELECT * FROM movies WHERE id = ?";
    connection.query(sql, [id], (err, movies) => {
    //gestisci errori
    if (err) return res.status(500).json({error: "database query failed"});
    res.json(movies[0]);
    });
}

module.exports = {index, show};