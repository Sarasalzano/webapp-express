const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/router");

//avvia server
app.listen(port, () => console.log(`App listening on port ${port}`));