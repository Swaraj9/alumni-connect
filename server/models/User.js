const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //Encryption module

//User Schema
const UserSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['alumni', 'teacher', 'admin'],
        required: true
    }
})

//Password Encryption
UserSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if(err)
            return next(err);
        this.password = hashedPassword;
        next();
    });
}); 

UserSchema.methods.comparePassword = function(password, cb){
    bcrypt.compare(password, this.password, (err, isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
    })
}

module.exports = mongoose.model('User', UserSchema);