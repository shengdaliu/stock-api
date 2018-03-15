const Facade = require('../../lib/facade')
const stockSchema = require('./schema')

class StockFacade extends Facade {}

module.exports = new StockFacade('stock', stockSchema)
