const mongoose = require('mongoose')

const smartphoneSchema = new mongoose.Schema({
  brand: String,
  model: String,
  capacity: String,
  release: String
})

module.exports = mongoose.model('Smartphone', smartphoneSchema)
