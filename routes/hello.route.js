const express = require('express');
const { getRoute } = require('../controllers/hello.controller');
const router = express.Router();

// api/arrow
router.route('/arrow').get(getRoute);

module.exports = router;
