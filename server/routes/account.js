const router = require('express').Router(); 
const jwt = require('jsonwebtoken'); 

const User = require('../models/user'); 
const config = require('../config'); 

const MESSAGE_USER_EXISTS = 'Account with that email already exists'; 
const MESSAGE_USER_SUCCESS = 'Token Created'; 

router.post('/signup',(req,res,next)=>{
    console.log('hit here'); 
    let user = new User(); 
    user.name = req.body.name; 
    user.email = req.body.email; 
    user.password = req.body.password; 
    user.picture = user.gravatar(); 

    User.findOne({email:req.body.email},(err,existingUser)=>{
        if(existingUser){
            res.json({
                success:false,
                message:MESSAGE_USER_EXISTS
            }); 
        }else{
            user.save(); 
            var token = jwt.sign({user:user},config.secret,{expiresIn:'7d'}); 
            res.json({
                success:true,
                message:MESSAGE_USER_SUCCESS,
                token:token
            }); 
        }
    }); 
}); 


module.exports = router; 