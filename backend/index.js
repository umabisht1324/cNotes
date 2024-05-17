const connectToMysql=require('./db');
connectToMysql();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Uma!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})