const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    let token = req.header('Authorization');
    if(!token)res.status(401).send("Access denied, no token provided ")

    token = token.split(" ")[1].trim();
    try{
        const decoded = jwt.verify(token, process.env.mySecretKey);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(400).send("invalid token ")
    }
}
