const mongoose = require('mongoose')

class Facade {
  constructor (name, schema) {
    this.Model = mongoose.model(name, schema)
  }

  create (body) {
    const model = new this.Model(body)
    return model.save()
  }

  find (...args) {
    return this.Model
      .find(...args)
      .exec()
  }

  findRegex(company){
    return this.Model
      .find()
  }

  findOne (...args) {
    return this.Model
      .findOne(...args)
      .exec()
  }

  findById (...args) {
    return this.Model
      .findById(...args)
      .exec()
  }

  aggregate (...args) {
    return this.Model
      .aggregate()
      .group({ _id: null, avgChange: { $avg: '$Change' }})
      .exec()
  }

  aggregateByCountry (country) {
    return this.Model
      .aggregate()
      .match({"description.Country": country})
      .group({ _id: "$description.Country", avgChange: { $avg: "$Change" }, count: {$sum: 1}})
      .exec()
  }

  aggregateByIndustry (industry) {
    return this.Model
      .aggregate()
      .match({"description.Industry": industry})
      .group({ _id: "$description.Industry", avgChange: { $avg: "$Change" }, count: {$sum: 1}})
      .exec()
  }

  aggregateBySector (sector) {
    return this.Model
      .aggregate()
      .match({"description.Sector": sector})
      .group({ _id: "$description.Sector", avgChange: { $avg: "$Change" }, count: {$sum: 1}})
      .exec()
  }

  distinct (key) {
    return this.Model
      .distinct(key)
      .exec()
  }
  
  // update (...args) {
  //   return this.Model
  //     .update(...args)
  //     .exec()
  // }

  // remove (...args) {
  //   return this.Model
  //     .remove(...args)
  //     .exec()
  // }
}

module.exports = Facade
