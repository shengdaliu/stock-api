const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))

router.route('/findRegexCompany/:company')
  .get((...args )=> controller.findRegexCompany(...args))

router.route('/aggregateChange/:key/:value')
  .get((...args) => controller.aggregateChange(...args))

router.route('/aggregateAvgVolume/:key/:value')
  .get((...args) => controller.aggregateAvgVolume(...args))

router.route('/aggregateROI/:key/:value')
  .get((...args) => controller.aggregateROI(...args))

router.route('/distinct/:key')
  .get((...args) => controller.distinct(...args))

// router.route('/:id')
//   .put((...args) => controller.update(...args))
//   .get((...args) => controller.findById(...args))
//   .delete((...args) => controller.remove(...args))


module.exports = router
