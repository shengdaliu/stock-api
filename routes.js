const Router = require('express').Router
const router = new Router()

const stock = require('./model/stock/router')

//CORS: IMPORTANT MIDDLEWARE
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); // add remove headers according to your needs
  next()
})

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to stock-api API!' })
})

router.use('/stock', stock)

module.exports = router
