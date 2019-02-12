var db = require("../models");

module.exports = function (app) {
  // Get all users
  app.get("/api/search", function (req, res) {
    db.Search.findAll({}).then(function (Project2) {
      res.json(Project2);
    });
  });

  // Get route for returning a specific search term
  app.get("/api/search/:searchTerm", function (req, res) {
    db.Search.findAll({
      where: {
        searchTerm: req.params.searchTerm
      }
    })
      .then(function (dbSearch) {
        res.json(dbSearch);
      });
  });

  // POST route to create search results
  app.post("/api/search", function (req, res) {
    db.Search.create({
      searchTerm: req.body.searchTerm
    })
    .then(function(dbSearch) {
      res.json(dbSearch);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
