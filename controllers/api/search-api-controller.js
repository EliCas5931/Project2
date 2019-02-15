var API = require("../../utils/API.js")

var router = require("express").Router();
var db = require("../../models");

router.get("/api/search/:searchTerm", function (req, res) {
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
  router.post("/api/search", function (req, res) {
    // iMDB AJAX goes here
    // once user is on search page and search term is entered, response title and user is saved into DB (search table)
    // API.#jquerynamegoeshere.
    db.Search.create({
      searchTerm: req.body.searchTerm
    })
      .then(function (dbSearch) {
        res.json(dbSearch);
      });
  });

  // Delete a search by id
  router.delete("/api/search/:id", function (req, res) {
    db.Search.destroy({ where: { id: req.params.id } }).then(function (dbSearch) {
      res.json(dbSearch);
    });
  });
module.exports = router;