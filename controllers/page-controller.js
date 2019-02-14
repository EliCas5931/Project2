var router = require("express").Router();
router.get("/", function (req, res) {
  res.render("home");
});

router.get("/auth/", function (req, res) {
  res.render("home");
});

// Load login page
router.get("/login", function (req, res) {
  res.render("login");
});

// Load signup page
router.get("/signup", function (req, res) {
  res.render("signup");
});

<<<<<<< HEAD
  // Route for search results page
  router.get("/search", function(req, res) {
    //throwing in api search
    res.render("search");
  });
=======
// Route for search results page
router.get("/search", function (req, res) {
  res.render("search");
});
>>>>>>> 703c9b4a149e33e8160b4b7b69d687f7d30b3b8b

// Render 404 page for any unmatched routes
router.get("*", function (req, res) {
  res.render("404");
});
module.exports = router;