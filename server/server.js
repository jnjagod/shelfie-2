require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.updateProduct)
app.get('/api/product/:id', ctrl.getProduct)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} shelves displayed`))
})