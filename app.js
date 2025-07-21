const request = require('request');
const express = require('express');
const app = express();

const city = process.argv[2];

const geoCodeUrl = `http://api.weatherapi.com/v1/current.json?key=94b0760f63d642a2982172603250607&q=${city}&aqi=no`;


request({ url: geoCodeUrl, json: true }, (error, response) => {
    if (error) {
        console.log(" 404 Not Found ")
    }

    else if (response.body.error) {
        console.log(response.body.error.message)

    }

    else {
        const { lon, lat, name } = response.body.location
        const condition = response.body.current.condition.text
        const temp = response.body.current.temp_c


        console.log(`City: ${name}`);
        console.log(`Condition: ${condition}`);
        console.log(`Temperature: ${temp} °C`);
        console.log(`Longitude: ${lon}, Latitude: ${lat}`);
    }









    // console.log(response.body)















})