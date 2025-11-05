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

//store recensione
function storeReview(req, res){
    //recupera id 
    const id = req.params.id
    // recuperiamo i dati nel body
    const { name, vote, text } = req.body;
    // prepariamo la query per la chiamata al DB
    const sql = 'INSERT INTO `reviews` (`name`, `vote`, `text`, `fk_movie`) VALUES (?,?,?,?)';
    //eseguiamo le query
    connection.query(sql, [name, vote, text, id], (err, result)=>{
        //se c'è un errore
        if(err) return res.status(500).json({ error: "Database Query Failed" });
        //se va tutto bene
        res.status(201);
        res.json({ id: result.insertId, message: 'Review added' });
    });

}


module.exports = {index, show, storeReview};