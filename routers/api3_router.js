const express=require("express");
const authorisation = require("../controllers/authorisation");
const validToken = require("../middlewares.js/auth");

const router= express.Router();

router.get("/api3",validToken,authorisation);


module.exports=router;