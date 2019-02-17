var router = require("express").Router();

router.use(require("./page-controller"));

router.use(require("./api"));

module.exports = router;