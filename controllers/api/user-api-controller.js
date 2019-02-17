// var router = require("express").Router();
var router = require("express").Router();
var db = require("../../models");

router.get("/api/users", function (req, res,) {
  var newUser = {
    userName: req.body.name,
    password: req.body.password
  };


  db.User.create(newUser)
    .then(function (createdUser) {
      res.json(createdUser);
    })
    .catch(function (err) {
      console.log(err);
      res.json(false);
    });
});
// POST route for saving a new post
router.post("/api/users", function (req, res) {
  console.log(req.body);
  db.User.create({userName: req.body.name, password: req.body.password}).then(function (dbUser) {
    res.json(dbUser);
  });
});

module.exports = router;
