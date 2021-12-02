const express = require('express')
const router = express.Router()

const Clientes = []
Clientes.push({ nome: 'Cliente 1', id: 1 })
Clientes.push({ nome: 'Cliente', id: 2 })
Clientes.push({ nome: 'Cliente', id: 3 })
Clientes.push({ nome: 'Cliente', id: 4 })

router.get('/', (req, res) => {
    res.json(Clientes)
})

router.post('/', (req, res) => {
    console.log('Dados do novo cliente: ', req.body)
    Clientes.push(req.body)
    res.status(201).send('Cliente adicionado com sucesso')
})

module.exports = router