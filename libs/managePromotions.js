// Add a rule in the store and retrieve the rules

let store = require('./store')

let manage = module.exports = {}

/**
 To populate the store we can use:
 curl -H "Content-Type: application/json" --request POST -d "{\"name\": \"bla\"}" http://localhost:3000/promo/add
 */

manage.add = (req, res) => {
  const promo = req.body
  store.addRule(promo)
  res.json({'status': 'OK'})
}

manage.retrieveAll = (req, res) => {
  const promos = store.getRules()
  res.json(promos)
}

return manage
