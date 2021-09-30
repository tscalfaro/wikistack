const router = require('express').Router()
const {addPage, wikiPage} = require('../views')

router.get('/', async (req, res, next) => {
  // try{
    await res.send(wikiPage())
    next()
  // }catch(e){next(e)}

})

// router.post('/', (req, res, next) => {
//   res.send('made it to posts')
// })

// router.get('/add',  (req, res, next) => {
//   res.send(addPage())
// })

module.exports = router;
