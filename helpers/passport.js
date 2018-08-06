const passport = require('passport');
const User = require('../models/User');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;


/* Segunda estrategia 
var FacebookTokenStrategy = require('passport-facebook-token)

passport.use(new FacebookTokenStrategy({
    clientID: FACEBOOK_APP_ID,: Copias tus credenciales de firebase
    clientSecret: FACEBOOK_APP_SECRET: Copias tus credenciales de firebase
  }, function(accessToken, refreshToken, profile, done) {
    User.findOne({facebookId: profile.id}, function (error, user) {
      return done(error, user);

      User.findOne({facebookId: profile.id})
      .then(user=>{
        if(!user) return User.create({
          username: displayName,
          email: profile.email[0].value,
          photoURL: profile.photos[0].value,
          facebookId: profile.id
        })
        return done(null, user)
      })
      .then(user=>{
        return done(null, user)
      })
      .catch(e=>next(e))

      console.log(profile)
    });
  }
));
*/