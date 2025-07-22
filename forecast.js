const request = require('request');


const forecast = (city, callback) => {

    const geoCodeUrl = `http://api.weatherapi.com/v1/current.json?key=94b0760f63d642a2982172603250607&q=${city}&aqi=no`;

    request({ url: geoCodeUrl, json: true }, (error, response) => {
        if (error) {
            callback("Error 404  ", undifined)
        }
        else if (response.body.error) {
            callback(response.body.error.message, undefined)
        }
        else {
            const name = response.body.location.name
            const temp = response.body.current.temp_c
            const lon = response.body.location.lon
            const lat = response.body.location.lat
            callback(undefined, {
                name: name,
                temp: temp,
                lon: lon,
                lat: lat
            })
        }
    })
}


module.exports = forecast;