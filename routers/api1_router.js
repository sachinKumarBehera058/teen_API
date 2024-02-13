const express=require("express");
const {generateToken }= require("../controllers/generateToken");

const router= express.Router();

router.get("/api1",generateToken);


module.exports=router;