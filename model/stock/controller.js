const Controller = require('../../lib/controller')
const stockFacade = require('./facade')

class StockController extends Controller {}

module.exports = new StockController(stockFacade)
