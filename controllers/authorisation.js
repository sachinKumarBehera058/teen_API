const authorization = async (req, res) => {
    let message;
  
    if (req.user.id === "0") {
      message = "hello!! Admin";
    } else if (req.user.id === "1") {
      message = "hello!! User";
    } else if (req.user.id === "2") {
      message = "hello!! Editor";
    } else {
      return res.status(401).send({ message: "You are not authorized" });
    }
  
    return res.status(200).send({ message });
  };
  
  module.exports = authorization;
  