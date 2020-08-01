const User = require('../models/User');
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
            if(err) throw err;
            if(!user) return done(null, false)
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) throw err;
                if(result === true) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            })
        })
    })
  );

  // Serialize User
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize User
  passport.deserializeUser(function (id, done) {
    User.findOne( { _id: id }, function (err, user) {
      done(err, user);
    });
  });
};
