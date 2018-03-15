const Facade = require('../../lib/facade')
const stockSchema = require('./schema')

class StockFacade extends Facade {
    aggregate (...args) {
        return mongoose.model('stock', stockSchema)
          .aggregate(
            { $group: { "_id": {...args} } }  
            )
          .exec()
      }
}

module.exports = new StockFacade('stock', stockSchema)
