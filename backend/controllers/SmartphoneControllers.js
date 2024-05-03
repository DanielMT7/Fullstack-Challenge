const SmartphoneModel = require('../models/SmartphoneModel')

module.exports.getSmartphones = async (req, res) => {
  const smartphone = await SmartphoneModel.find()
  res.send(smartphone)
}

module.exports.saveSmartphone = async (req, res) => {
  const { brand, model, capacity, release } = req.body

  SmartphoneModel.create({ brand, model, capacity, release })
    .then(data => {
      res.status(201).send(data)
    })
    .catch(err => {
      console.log(err)
      res.send({ error: err, msg: 'Something went wrong' })
    })
}

module.exports.updateSmartphone = async (req, res) => {
  const { id } = req.params
  const { brand, model, capacity, release } = req.body

  SmartphoneModel.findByIdAndUpdate(id, { brand, model, capacity, release })
    .then(() => res.send('Updated successfully...'))
    .catch(err => {
      console.log(err)
      res.send({ error: err, msg: 'Something went wrong' })
    })
}

module.exports.deleteSmartphone = async (req, res) => {
  const { id } = req.params

  SmartphoneModel.findByIdAndDelete(id)
    .then(() => res.send('Deleted successfully...'))
    .catch(err => {
      console.log(err)
      res.send({ error: err, msg: 'Something went wrong' })
    })
}
