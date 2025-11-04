const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/router");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const { index, show } = require("./controllers/controller");
const cors = require("cors");

//middleware per rendere disponibile i file statici
app.use(express.static('public'));

// middleware per il CORS
app.use(cors({
origin: 'http://localhost:5173'
}));

//body-parser"
app.use(express.json());

//rotta index
app.get("/", index);

//rotta film
app.use("/movie", router);

//import middleware gestione errore
app.use(errorHandler);

//import middleware rotta inesistente
app.use(notFound);

//avvia server
app.listen(port, () => console.log(`App listening on port ${port}`));