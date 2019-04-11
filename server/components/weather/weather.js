const _ = require('lodash');
const axios = require('axios');

let get = async (lat, lng) => {
    let url = `https://api.darksky.net/forecast/2025e9d6e9b60ceb7e37450f7a851824/${lat},${lng}?lang=ru&units=si`;
    let params = {
    }
    return axios.get(url, { params })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return Promise.reject(err.response.data);
        });
}


exports.getWeather = async (req, res) => {
    lat = req.params.cord.split(',')[0];
    lng = req.params.cord.split(',')[1];
    try {
        let weather = await get(lat, lng);
        res.status(200).send(weather);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}