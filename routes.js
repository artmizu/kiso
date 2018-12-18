const router = require('express').Router()

router.use('/user', require('./app/route/user'))

module.exports = router;