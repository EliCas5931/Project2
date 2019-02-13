var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Get all search terms
  app.get("/api/search", function (req, res) {
    db.Search.findAll({}).then(function (dbSearch) {
      res.json(dbSearch);
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

  // POST route for Passport

  app.post('/login',
 passport.authenticate('local'),
 function(req, res) {
   // If this function gets called, authentication was successful.
   // `req.user` contains the authenticated user.
   console.log(req.user);
   res.send(req.user);
 });

  // app.post('/login',
  //   passport.authenticate('local', {
  //     successRedirect: '/',
  //     failureRedirect: '/login',
  //     failureFlash: true
  //   })
  // );

  // POST route to create search results
  app.post("/api/search", function (req, res) {
    db.Search.create({
      searchTerm: req.body.searchTerm
    })
      .then(function (dbSearch) {
        res.json(dbSearch);
      });
  });

  // Delete a search by id
  app.delete("/api/search/:id", function (req, res) {
    db.Search.destroy({ where: { id: req.params.id } }).then(function (dbSearch) {
      res.json(dbSearch);
    });
  });
};
