const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

const cookieExtractor = (req) => {
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

//Authorization
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "AlumniConnect"
}, (payload, done) => {
    User.findById({_id : payload.sub}, (err, user) => {
        if(err)
            return done(err, false);
        if(user)
            return done(null, user);
        else   
            return done(null, false);
    })
}));

//Authentication
passport.use(new LocalStrategy((username, password, done)=>{
    User.findOne({username}, (err, user) => {
        //Something went wrong with the database
        if(err)
            return done(err);
        //User doesn't exist
        if(!user)
            return done(null, false);
        //User exists
        user.comparePassword(password, done);
    });
}));