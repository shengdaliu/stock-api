const Controller = require('../../lib/controller')
const stockFacade = require('./facade')

class StockController extends Controller {
     aggregate (req, res, next) {
        return this.stockFacade.aggregate(req.query)
          .then(collection => res.status(200).json(collection))
          .catch(err => next(err))
      }
}

module.exports = new StockController(stockFacade)
