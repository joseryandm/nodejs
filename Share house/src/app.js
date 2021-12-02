const express = require('express')
    //const log = require('./middlewares/log.js')
const routers = require('./rotas')

const app = express()
app.use(express.json())
app.use(log)
app.use('/', routers)

app.listen(3000, () => {
    console.log('App online!')
})