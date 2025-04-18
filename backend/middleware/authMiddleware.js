const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    if(req.method === 'OPTIONS'){
        next();
    }
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(403).json({message: "user not authorized"});
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }catch(error){
        res.status(403).json({message: "user not authorized"});
    }
}