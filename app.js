const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/router");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

//import middleware gestione errore
app.use(errorHandler);

//import middleware rotta inesistente
app.use(notFound);

//avvia server
app.listen(port, () => console.log(`App listening on port ${port}`));