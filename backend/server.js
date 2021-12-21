const fetch = require('node-fetch')
const cors = require('cors')
const express = require('express')
const path = require('path')
require('dotenv').config();
const app = express()
const port = 3001

const apiKey = process.env.API_KEY;


app.use(cors());

// fetches data from open cat fact api, just for testing purposes
function home(request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
}

// gets weather data from a certain location
function weather(request, response) {
  const location = request.params.location;
  fetch(`https://openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(result => result.json().then(json =>
      response.status(result.status).send(json.weather || json)
    ))
    .catch(error => console.error(error))
}

//gets whole dataset for a certain city from weather api
function weather_all(request, response) {
    const location = request.params.location;
    fetch(`https://openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(result => result.json().then(json =>
      response.status(result.status).send(json)
      ))
    .catch(error => console.error(error))
    
}

//fetches temperature for specific city
function temperature(request, response) {
    const location = request.params.location;
    fetch(`https://openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(result => result.json().then(json => 
      response.status(result.status).send(json.main || json)
      ))
    .catch(error => console.log(error))
}

//local routes
app.get('/', home)
app.get('/weather/:location', weather)
//app.get('/:location', weather_all)
app.get('/temp/:location', temperature);

//start express server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})