const express = require('express')
const router = express.Router()
const {addPage, wikiPage} = require('../views')

router.get('/', async (req, res, next) => {
  // try{
     res.send('')
  // }catch(e){next(e)}

})

router.post('/', (req, res, next) => {
  res.send('made it to posts')
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router;
