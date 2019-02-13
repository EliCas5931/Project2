var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res){
    res.render("home");
  })


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // Route for search results page
  app.get("/search", function(req, res) {
    res.render("results", {layout: "second"});
  });

  // Route for signup form
};
