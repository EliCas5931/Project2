var router = require("express").Router();
var db = require("../models");

router.get("/login", function(req, res) {
  res.render("/");
});

router.post("/login", function(req, res) {
  // Look up user via userName
  db.User.findOne({
    where: {
      userName: req.body.userName
    }
  }).then(function(user) {
    // Compare password
    if (req.body.password !== user.password) {
      return res.render("auth/login", {
        email: req.body.email || "",
        error: "Invalid email/password combo, please try again."
      });
    }

    res.redirect("/");
  });
});

router.get("/signup", function(req, res) {
  res.render("auth/signup");
});

router.post("/signup", function(req, res) {
  var newUser = {
    userName: req.body.userName,
    password: req.body.password
  };
  db.User.create(newUser)
    .then(function(createdUser) {
      res.redirect("/auth/login");
    })
    .catch(function(err) {
      console.error(err);
    });
});

module.exports = router;