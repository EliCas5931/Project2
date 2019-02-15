var router = require("express").Router();

router.use("/", require("./page-controller"));

router.use("/api", require("./api"));

module.exports = router;