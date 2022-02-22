const express = require('express');
const { mod } = require('prelude-ls');
const router = express.Router();

router.use(require('./voterRoutes'));
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;