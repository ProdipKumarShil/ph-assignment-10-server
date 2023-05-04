const express = require('express')
const app = express()
const port = 5000

const chefsJSON = require('./data/chefs.json')

app.get('/', (req, res) => {
  res.send('recipe is cooking')
})

app.get('/chefs', (req, res) => {
  res.send(chefsJSON)
})

app.listen(port, () => {
  console.log('recipe is cooking in ', port)
})
