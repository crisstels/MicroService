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
app.get('/', cat)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})