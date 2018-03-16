const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))

router.route('/findRegex')
  .get((...args )=> controller.findRegex(...args))

router.route('/aggregateChange')
  .get((...args) => controller.aggregateChange(...args))

router.route('/aggregateAvgVolume')
  .get((...args) => controller.aggregateAvgVolume(...args))

router.route('/aggregateROI')
  .get((...args) => controller.aggregateROI(...args))

router.route('/aggregate20Days')
  .get((...args) => controller.aggregate20Days(...args))

router.route('/aggregate200Days')
  .get((...args) => controller.aggregate200Days(...args))

router.route('/distinct')
  .get((...args) => controller.distinct(...args))

module.exports = router
