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
    User.findById({_id : payload.sub})
        .then(user => {
            if(user)
                return done(null, user);
            else
                return done(null, false);
        })
        .catch(err => {
            if(err)
                return done(err, false);
        })
}));

//Authentication
passport.use(new LocalStrategy((username, password, done)=>{
    User.findOne({username})
        .then(user => {
            if(!user)
                return done(null, false);
            user.comparePassword(password, done);
        })
        .catch(err => {
            return done(err);
        })
}));