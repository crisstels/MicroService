const fetch = require('node-fetch')
const express = require('express')
require('dotenv').config();
const app = express()
const port = 3000

const apiKey = process.env.API_KEY;
console.log(apiKey);

// fetches data from open cat fact api, just for testing purposes
function cat(req, res) {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => res.send(json.map(({ text }) => ({ text }))))
}

// gets weather data from a certain location
function weather(req, res) {
  const location = req.params.location;
    fetch(`https://openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(res => res.json())
    .then(json => res.send(json.weather))
}

//gets whole dataset from weather api
function weather_all(req, res) {
  fetch("https://openweathermap.org/data/2.5/weather?q=Bonn&appid=439d4b804bc8187953eb36d2a8c26a02")
  .then(res => res.json())
  .then(json => res.send(json))
}

//local routes
app.get('/', cat)
app.get('/weather/:location', weather)
app.get('weatherAll', weather_all)

//start express server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})