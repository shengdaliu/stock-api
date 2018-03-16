const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))

router.route('/findRegexCompany/:company')
  .get((...args )=> controller.findRegexCompany(...args))

router.route('/aggregateByCountry/:country')
  .get((...args) => controller.aggregateByCountry(...args))

router.route('/aggregateByIndustry/:industry')
  .get((...args) => controller.aggregateByIndustry(...args))

router.route('/aggregateBySector/:sector')
  .get((...args) => controller.aggregateBySector(...args))

router.route('/distinct/:key')
  .get((...args) => controller.distinct(...args))

// router.route('/:id')
//   .put((...args) => controller.update(...args))
//   .get((...args) => controller.findById(...args))
//   .delete((...args) => controller.remove(...args))


module.exports = router
