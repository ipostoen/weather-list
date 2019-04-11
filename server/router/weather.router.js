const express = require('express');
const weather = require('../components/weather/weather');

const router = express.Router();

router.route('/:cord').get(weather.getWeather);

module.exports = router;