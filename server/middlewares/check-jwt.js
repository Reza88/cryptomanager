const jwt = require('jsonwebtoken'); 
const config = require('../config'); 

const MESSAGE_ERROR_TOKEN = 'No Token Provided'; 
const MESSAGE_ERROR_AUTHENTICATE = 'Failed To Authenticate Token';


module.exports = function(req,res,next){
    let token = req.headers["authorization"]; 
    if(token){
        jwt.verify(token,config.secret,function(err,decode){
            if(err){
                res.jon({
                    success:false,
                    message:MESSAGE_ERROR_AUTHENTICATE
                }); 
            }else{
                req.decoded = decoded; 
                next(); 
            }
        }); 
    }else{
        res.status(403).json({
            success:false, 
            message:MESSAGE_ERROR_TOKEN
        })
    }
}; 