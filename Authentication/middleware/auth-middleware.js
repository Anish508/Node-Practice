const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1]

  if(!token){
    return res.status(401).json({
      success: false,
      message:"Access denied ! please login"
    })
  }

  //decode user infromation

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SCECRET_KEY)
    console.log(decodeToken);
    req.userInfo = decodeToken;
    next();
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:"Access denied ! please login"
    })
  }

};

module.exports = authMiddleware;
