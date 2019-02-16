var router = require("express").Router();
var db = require("../../models");

router.get("/api/users", function (req, res) {
  var newUser = {
    userName: req.body.userName,
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
  console.log("hi");
  db.User.create(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});

module.exports = router