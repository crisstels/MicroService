const fetch = require('node-fetch')
const express = require('express')
const app = express()
const port = 3000

/**
 * weather api call
 * console.log data
 * express server 
 * server side rendering with pug
 */

function cat(req, res) {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => res.send(json.map(({ text }) => ({ text }))))
}

function weather(req, res) {
    fetch("https://openweathermap.org/data/2.5/onecall?lat=50.7333&lon=7.1&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02")
    .then(res => res.json())
    .then(json => res.send(json))
}

app.get('/', cat)
app.get('/weather', weather)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})