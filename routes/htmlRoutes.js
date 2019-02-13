var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res){
    res.render("home");
  });


  // Load login page
  app.get("/login.handlebars", function(req, res) {
    res.render("login");
  });

  // Load signup page
  app.get("/signup.handlebars", function(req, res) {
    res.render("signup");
  });

  // Route for search results page
  app.get("/search", function(req, res) {
    res.render("results", {layout: "second"});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });



};


