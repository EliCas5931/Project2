var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

chai.use(chaiHttp);

var request;

describe("GET /api/search/:searchTerm", function() {
    // Before each test begins, create a new request server for testing
    // & delete all examples from the db
    beforeEach(function() {
        request = chai.request(server);
        return db.sequelize.sync({ force: true });
    });

    it("should return the requested search item from the database", function(done) {
        db.Search.findAll({

        })
    })
})