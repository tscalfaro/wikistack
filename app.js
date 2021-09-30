const morgan = require('morgan')
const express = require('express')
const sequelize = require('sequelize')

const app = express()
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send(`<head> Hello </head>`)
})


const PORT = 8080
app.listen('PORT', ()=>{
  console.log('Listening on PORT 8080')
})
