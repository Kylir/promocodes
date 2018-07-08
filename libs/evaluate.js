// Evaluate an offer and browse the rules to find a match

let store = require('./store')

let evaluate = module.exports = {}

evaluate.findMatch = (req, res) => {
  const offer = req.body
  const rules = store.getRules()

  

  res.json({'evaluation': 'OK'})
}

return evaluate
