const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('recipe is cooking')
})



app.listen(port, () => {
  console.log('recipe is cooking in ', port)
})
