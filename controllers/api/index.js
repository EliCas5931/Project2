var router = require("express").Router();

router.use(require("./search-api-controller"));
router.use(require("./user-api-controller"));

module.exports = router;