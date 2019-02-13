var router = require("express").Router();

router.use("/", require("./page-controller"));
router.use("/auth", require("./auth-controller"));
router.use("/search", require("./search-controller"));

module.exports = router;