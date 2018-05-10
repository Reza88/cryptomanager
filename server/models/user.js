const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    picture: String,
    address: {
        address1: String,
        country: String,
        city: String,
        state: String,
        postCode: String
    },
    created: {
        type: Date,
        default: Date.now
    }
})

//this function is used to hash the password if it has not been modified or if its new
UserSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')){
        return next();
    }
    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err){
            return next(err);
        }
        user.passward = hash;
        next();
    })
})

//This will compare the password in the user schema and the hashed password in the database
UserSchema.methods.comparePassword = function(password) {
    return brypt.compareSync(password, this.passward);
}

//generates random avatar for each user based on the unique email address provided line 49 generates a random string that is then inserted into the URL
//in line 52 and is returned
UserSchema.methods.gravatar = function(size){
    if(!this.size) size = 200; 
    if(!this.email)return 'https://gravatar.com/avatar/?s' + size + '&d=retro'; 
    var md5 = crypto.createHash('md5').update(this.email).digest('hex'); 

    return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro'; 
}

module.exports = mongoose.model('User', userSchema);