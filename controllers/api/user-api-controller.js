var router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
    var newUser = {
        userName: req.body.userName
    };

    db.Task.create(newUser)
    .then(function(createdUser) {
        res.json(createdUser);
    })
    .catch(function(err) {
        console.log(err);
        res.json(false);
    });
});

module.exports = router