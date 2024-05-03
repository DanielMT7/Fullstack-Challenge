const { Router } = require('express')

const {
  getSmartphones,
  saveSmartphone,
  updateSmartphone,
  deleteSmartphone
} = require('../controllers/SmartphoneControllers')

const router = Router()

router.get('/get', getSmartphones)
router.post('/save', saveSmartphone)
router.put('/update/:id', updateSmartphone)
router.delete('/delete/:id', deleteSmartphone)

module.exports = router
