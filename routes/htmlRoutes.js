var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home");
  })

<<<<<<< HEAD
  app.get("/hello", function(req, res) {
    res.render("search");
  })
=======
>>>>>>> b0575597324e3e077d9300a2ae09e23aa59a99ed

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
