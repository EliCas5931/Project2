var router = require("express").Router();

router.use("/search", require("./search-api-controller"));
router.use("/users", require("./user-api-controller"));

module.exports = router;