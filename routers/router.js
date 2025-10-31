//import express
const express = require("express");
//importa router 
const router = express.Router();
//import funzioni index e show
const {index, show} = require("../controllers/controller");

//index
router.get("/", index);

//show
router.get("/:id", show);

module.exports = router;
