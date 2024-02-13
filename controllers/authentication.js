const authentication = async (req, res) => { 
    return res
      .status(200)
      .send({ message: `token authentication successful.Hi ${req.user.username}` });    
  };
   
  module.exports ={ authentication };
  