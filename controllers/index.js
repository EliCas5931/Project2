var router = require("express").Router();

router.use("/", require("./page-controller"));
router.use("/auth", require("./auth-controller"));
router.use("/search", require("./api/search-api-controller"));

router.use("/api", require("./api"));

module.exports = router;