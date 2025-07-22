const forecast = require('./forecast')

const city = process.argv[2]


forecast(city , (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})
