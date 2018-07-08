// A very simple interface to a in memory store

const mock = require('../mock/promoCode.json')

// TODO: replace this with a proper Redis or MongoDB store

let store = module.exports = {}

store.rules = [mock]

store.addRule = (rule) => {
  store.rules.push(rule)
}

store.getRules = () => {
  return store.rules
}

return store

