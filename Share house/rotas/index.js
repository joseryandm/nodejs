const express = require('express')
const router = express.Router()
const clienteRouter = require('./clientes')

router.get('/', (req, res) => {
    res.send('App online, ok!')
})

router.use('/clientes', clienteRouter)


module.exports = router