const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');


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

UserSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')){
        return next();
    }
    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password) {
    console.log('inside here'); 
    return bcrypt.compareSync(password, this.password);
};


UserSchema.methods.gravatar = function(size){
    if(!this.size) size = 200; 
    if(!this.email)return 'https://gravatar.com/avatar/?s' + size + '&d=retro'; 
    var md5 = crypto.createHash('md5').update(this.email).digest('hex'); 

    return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro'; 
}

module.exports = mongoose.model('User', UserSchema);