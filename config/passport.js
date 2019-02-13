var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

var db = require("../models")

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({where: { userName: username }}, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log("KH");
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  module.exports = passport;