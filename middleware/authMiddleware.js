
//he protect middleware ensures that only authenticated users can access certain routes
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Middleware function that checks if a user is authenticated using JWT, securing the private routes.
    //middleware sits between request and controller
    // if the header - bearer- Authorization: Bearer <your-jwt-token>
    //ensure that the format is correct


const protect = async (req, res, next) =>{
    
    let token;   

    if(req.headers.authorization?.startsawith ("Bearer")) {
    try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRECT);
        req.user= await User.findById(decoded.id).select("-password");
        next();
    }catch(error){
        res.status(401).json({message : "Not authorized, token failed"});
    }

    } else{
        res.status(401).json({message : "Not authorized, no token"});
    }
};
module.exports = protect;

