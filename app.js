const morgan = require('morgan')
const express = require('express')
const { db, User, Page } = require('./models');



const app = express()


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send(`<head> Hello </head>`)
})

const PORT = 8080
const init = async () =>{
  await db.sync()

  app.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}`)
  })
}
init();
