var path = require("path");

module.exports = function(app) {
  // Load index page 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.handlebars"));
  });

  // Load search results page 
  app.get("/search/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/landing.handlebars"))
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
