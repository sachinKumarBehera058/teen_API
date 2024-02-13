const express=require("express");
const { authentication}= require("../controllers/authentication");
const validToken = require("../middlewares.js/auth");

const router= express.Router();

router.get("/api2",validToken,authentication);

module.exports=router;