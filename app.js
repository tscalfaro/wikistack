const morgan = require('morgan')
const express = require('express')
const { db, User, Page } = require('./models');
const users = require('./routes/users')
const wiki = require('./routes/wiki')



const app = express()

app.use('/users', users)
app.use('/wiki', wiki)

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send(wiki)
})


const PORT = 8080
const init = async () =>{
  await db.sync()

  app.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}`)
  })
}
init();
