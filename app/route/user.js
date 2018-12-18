const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('Ok')  
})

module.exports = router