const express = require('express');
const weather = require('./weather.router');

const router = express.Router();

router.use('/weather', weather);


module.exports = router;