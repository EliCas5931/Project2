var router = require("express").Router();

router.use("/search", require("./search-api-controller"));
router.use("/user", require("./user-api-controller"));

module.exports = router;