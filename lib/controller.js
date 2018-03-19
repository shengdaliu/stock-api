class Controller {
  constructor (facade) {
    this.facade = facade
  }

  create (req, res, next) {
    this.facade.create(req.body)
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err))
  }

  find (req, res, next) {
    return this.facade.find(req.query)
      .then(collection => res.status(200).json(collection))
      .catch(err => next(err))
  }

  findRegex (req, res, next) {
    return this.facade.findRegex(Object.keys(req.query)[0],req.query[Object.keys(req.query)[0]])
      .then(collection => res.status(200).json(collection))
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    return this.facade.findOne(req.query)
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err))
  }

  findById (req, res, next) {
    return this.facade.findById(req.params.id)
      .then((doc) => {
        if (!doc) { return res.sendStatus(404) }
        return res.status(200).json(doc)
      })
      .catch(err => next(err))
  }

  aggregate (req, res, next) {
    return this.facade.aggregate(req.query)
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err))
  }

  aggregateChange (req, res, next) {
    // return this.facade.aggregateChange(req.query.key,req.query.value)
    return this.facade.aggregateChange(Object.keys(req.query)[0],req.query[Object.keys(req.query)[0]])
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err))
  }

  aggregateAvgVolume (req, res, next) {
    return this.facade.aggregateAvgVolume(Object.keys(req.query)[0],req.query[Object.keys(req.query)[0]])
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err))
  }

  aggregateROI (req, res, next) {
    return this.facade.aggregateROI(Object.keys(req.query)[0],req.query[Object.keys(req.query)[0]])
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err))
  }

  aggregate20Days (req, res, next) {
    return this.facade.aggregate20Days(Object.keys(req.query)[0],req.query[Object.keys(req.query)[0]])
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err))
  }

  aggregate200Days (req, res, next) {
    return this.facade.aggregate200Days(Object.keys(req.query)[0],req.query[Object.keys(req.query)[0]])
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err))
  }

  distinct (req, res, next) {
    return this.facade.distinct(req.query.key)
      .then(collection => res.status(200).json(collection))
      .catch(err => next(err))
  }

  // update (req, res, next) {
  //   this.facade.update({ _id: req.params.id }, req.body)
  //     .then((results) => {
  //       if (results.n < 1) { return res.sendStatus(404) }
  //       if (results.nModified < 1) { return res.sendStatus(304) }
  //       res.sendStatus(204)
  //     })
  //     .catch(err => next(err))
  // }

  // remove (req, res, next) {
  //   this.facade.remove({ _id: req.params.id })
  //     .then((doc) => {
  //       if (!doc) { return res.sendStatus(404) }
  //       return res.sendStatus(204)
  //     })
  //     .catch(err => next(err))
  // }
}

module.exports = Controller
