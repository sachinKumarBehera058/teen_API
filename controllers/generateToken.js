const jwt = require("jsonwebtoken");

const generateToken = async(req,res)=>{ 
    const {person,role}=req.body;
   const accessTokenUser= jwt.sign({
      user:{
          username:person,
          id:role,
      },
  },
  process.env.ACCESS_TOKEN_SECERT,
  {expiresIn: "1d"}
  );
  return res.status(200).send({message:"Your authentication token",accessTokenUser});
};

module.exports ={ generateToken }; 