const SmartphoneModel = require('../models/SmartphoneModel')

module.exports.getSmartphones = async (req, res) => {
  const smartphone = await SmartphoneModel.find()
  res.send(smartphone)
}

module.exports.saveSmartphone = async (req, res) => {
  const { brand, model, capacity, release } = req.body

  SmartphoneModel.create({ brand, model, capacity, release })
    .then(data => {
      console.log('Saved Successfully...')
      res.status(201).send(data)
    })
    .catch(err => {
      console.log(err)
      res.send({ error: err, msg: 'Something went wrong' })
    })
}

module.exports.updateSmartphone = async (req, res) => {
  const { id } = req.params
  const { smartphone } = req.body

  SmartphoneModel.findByIdAndUpdate(id, { smartphone })
    .then(() => res.send('Updated successfully...'))
    .catch(err => {
      console.log(err)
      res.send({ error: err, msg: 'Something went wrong' })
    })
}

module.exports.deleteSmartphone = async (req, res) => {
  const { id } = req.params
  const { smartphone } = req.body

  SmartphoneModel.findByIdAndRemove(id, { smartphone })
    .then(() => res.send('Deleted successfully...'))
    .catch(err => {
      console.log(err)
      res.send({ error: err, msg: 'Something went wrong' })
    })
}
