const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stockSchema = new Schema({
  "Company": String,
  "Price" : Number,
  "Earnings Date" : { type: Date, default: Date.now },
  "description" : {
    "Country" : String,
    "Sector" : String,
    "Industry" : String
},
  "20-Day Simple Moving Average" : Number,
  "200-Day Simple Moving Average" : Number,
  "50-Day" : [ 
      Number,
      Number
  ],
  "52-Week" : [ 
      Number, 
      Number
  ],
  "Analyst Recom" : Number,
  "Average True Range" : Number,
  "Average Volume" : Number,
  "Beta" : Number,
  "Change" : Number,
  "EPS ttm" : Number,
  "ROI" : Number,
  "ratio" : {
      "quick" : Number,
      "current" : Number
  },
  "performance" : {
      "Year" : Number,
      "Half Year" : Number,
      "Month" : Number,
      "Week" : Number
  }
})

module.exports = stockSchema
