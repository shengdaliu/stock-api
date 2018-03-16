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

  findRegexCompany(company){
    return this.Model
      .find({Company: {$regex: company, $options: 'i'}})
      .exec()
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

  aggregateChange (key, value) {
    key = "$"+key
    if(value != undefined){
      return this.Model
        .aggregate()
        .match(JSON.parse('{"'+key+'": "'+value+'"}'))
        .group({ _id: key, avgChange: { $avg: "$Change" }, minChange: { $min: "$Change" }, maxChange: { $max: "$Change" }, count: {$sum: 1}})
        .exec()
    }
    else{
      return this.Model
        .aggregate()
        .group({ _id: key, avgChange: { $avg: "$Change" }, minChange: { $min: "$Change" }, maxChange: { $max: "$Change" }, count: {$sum: 1}})
        .exec()
    }
  }

  aggregateAvgVolume (key, value) {
    key = "$"+key
    if(value!=undefined){
      return this.Model
        .aggregate()
        .match(JSON.parse('{"'+key+'": "'+value+'"}'))
        .group({ _id: key, avgAvgVolume: { $avg: "$Average Volume" }, minAvgVolume: { $min: "$Average Volume" }, maxAvgVolume: { $max: "$Average Volume" }, count: {$sum: 1}})
        .exec()
    }
    else{
      return this.Model
        .aggregate()
        .group({ _id: key, avgAvgVolume: { $avg: "$Average Volume" }, minAvgVolume: { $min: "$Average Volume" }, maxAvgVolume: { $max: "$Average Volume" }, count: {$sum: 1}})
        .exec()
    }
  }

  aggregateROI (key, value) {
    key = "$"+key
    if(value != undefined){
      return this.Model
        .aggregate()
        .match(JSON.parse('{"'+key+'": "'+value+'"}'))
        .group({ _id: key, avgROI: { $avg: "$ROI" }, minROI: { $min: "$ROI" }, maxROI: { $max: "$ROI" }, count: {$sum: 1}})
        .exec()
    }
    else{
      return this.Model
        .aggregate()
        .group({ _id: key, avgROI: { $avg: "$ROI" }, minROI: { $min: "$ROI" }, maxROI: { $max: "$ROI" }, count: {$sum: 1}})
        .exec()
    }
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
