const express = require('express')
const app = express()
const port = 5000

const chefsJSON = require('./data/chefs.json')
const singleChefJSON = require('./data/singleChefs.json')

app.get('/', (req, res) => {
  res.send('recipe is cooking')
})

app.get('/chefs', (req, res) => {
  res.send(chefsJSON)
})

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id
  const selectedChef = singleChefJSON.find(c => c.id == id)
  res.send(selectedChef)

})

app.listen(port, () => {
  console.log('recipe is cooking in ', port)
})
