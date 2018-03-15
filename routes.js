const Router = require('express').Router
const router = new Router()

const stock = require('./model/stock/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to stock-api API!' })
})

router.use('/stock', stock)

module.exports = router
