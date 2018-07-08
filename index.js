const express = require('express')
var bodyParser = require('body-parser')
let promos = require('./libs/managePromotions')
let evaluate = require('./libs/evaluate')

const app = express()

// To parse JSON bodies
app.use(bodyParser.json())

// Insert a new promotion
app.post('/promo/add', promos.add)

// Retrieve all the promotions
app.get('/promo/retrieve', promos.retrieveAll)

// Evaluate conditions
app.post('/evaluate', evaluate.findMatch)


app.listen(3000, () => console.log('Promocodes listening on port 3000!'))



