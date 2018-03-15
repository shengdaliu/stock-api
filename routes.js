const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const pet = require('./model/pet/router')
const stock = require('./model/stock/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to stock-api API!' })
})

router.use('/user', user)
router.use('/pet', pet)
router.use('/stock', stock)

module.exports = router
