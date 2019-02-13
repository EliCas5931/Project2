var router = require("express").Router();
var passport = require("../config/passport");

router.post('/login',
passport.authenticate('local'),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  console.log(req.user);
  res.send(req.user);
});

 router.post('/login',
   passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/login',
     failureFlash: true
   })
 );
module.exports = router;