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

function show(req, res) {
  const id = req.params.id;
  const sql = "SELECT * FROM movies WHERE id = ?";

  connection.query(sql, [id], (err, movies) => {
    if (err) return res.status(500).json({ error: "database query failed" });
    if (movies.length === 0) return res.status(404).json({ error: "movie not found" });

    const movie = movies[0]; 

    // Ora facciamo la query per le recensioni
    const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?";
    connection.query(sqlReviews, [id], (err, reviews) => {
      if (err) return res.status(500).json({ error: "database query failed" });

      // Aggiungiamo le recensioni al film
      movie.reviews = reviews;

      // E solo ORA rispondiamo
      res.json(movie);
    });
  });
}

//store recensione
function storeReview(req, res){
    //recupera id 
    const id = req.params.id
    // recuperiamo i dati nel body
    const { name, vote, text } = req.body;
    // prepariamo la query per la chiamata al DB
    const sql = 'INSERT INTO `reviews` (`name`, `vote`, `text`, `movie_id`) VALUES (?,?,?,?)';
    //eseguiamo le query
    connection.query(sql, [name, vote, text, id], (err, result)=>{
        //se c'è un errore
        if(err) return res.status(500).json({ error: "Database Query Failed" });
        //se va tutto bene
        res.status(201);
        res.json({ id: result.insertId, message: 'Review added' });
    });

};


module.exports = {index, show, storeReview};