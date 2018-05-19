const router = require('express').Router(); 
const jwt = require('jsonwebtoken'); 

const User = require('../models/user'); 
const config = require('../config'); 

const MESSAGE_USER_EXISTS = 'Account with that email already exists'; 
const MESSAGE_USER_SUCCESS = 'Token Created'; 
const MESSAGE_LOGIN_NON_EXIST = 'User does not exist!'; 
const MESSAGE_LOGIN_PASSWORD_CHECK = 'Authentication failed. Wrong Password'; 
const MESSAGE_LOGIN_TOKEN_SENT = 'Enjoy Your Token!';
const EXPIRATION_DAYS = 7;  


router.post('/signup',(req,res,next)=>{
    console.log('hit here'); 
    let user = new User(); 
    user.name = req.body.name; 
    user.email = req.body.email; 
    user.password = req.body.password; 
    user.picture = user.gravatar(); 

    User.findOne({email:req.body.email},(err,existingUser)=>{
        console.log('found existing user' + existingUser); 
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
router.post('/login',(req,res,next)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err) throw err; 
        if(!user){
            res.json({
                success:false,
                message:MESSAGE_LOGIN_NON_EXIST
            });
        }else if(user){
            var validPassword = user.comparePassword(req.body.password);
            if(!validPassword){
                res.json({
                    success:false,
                    message:MESSAGE_LOGIN_PASSWORD_CHECK
                });
            }else{
                var token = jwt.sign({
                    user:user
                },config.secret,{expiresIn:EXPIRATION_DAYS});

                res.json({
                    success:true,
                    message:MESSAGE_LOGIN_TOKEN_SENT,
                    token:token
                });
            }
        }
    }); 
}); 







module.exports = router;    