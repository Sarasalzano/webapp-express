//import express
const express = require("express");
//importa router 
const router = express.Router();
//import funzioni index e show
const {index, show, storeReview} = require("../controllers/controller");

//index
router.get("/", index);

//show
router.get("/:id", show);

//store recensione
router.get("/:id", storeReview);

module.exports = router;
