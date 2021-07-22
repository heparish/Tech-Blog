const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;