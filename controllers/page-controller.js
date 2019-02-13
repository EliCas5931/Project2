var router = require("express").Router();
router.get("/", function(req, res) {
    res.render("home");
  });


  // Load login page
  router.get("/login", function(req, res) {
    res.render("login");
  });

  // Load signup page
  router.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Route for search results page
  router.get("/search", function(req, res) {
    res.render("search");
  });

  // Render 404 page for any unmatched routes
  router.get("*", function(req, res) {
    res.render("404");
  });
module.exports = router;