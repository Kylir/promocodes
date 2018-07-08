// Evaluate a status against the set of rules to find a match
// A status is made of 3 values: age, date, location 

let store = require('./store')
const meteoService = require('./meteo')

let evaluate = module.exports = {}

evaluate.findMatch = (req, res) => {
  const status = req.body // This is a set of value to be matched against the promotions
  const rules = store.getRules()

  rules.map(findValidPromotion(status)) //
  
  res.json({'evaluation': 'OK'})
}

return evaluate

// Returns a factory with the correct status info: age, date, location
function findValidPromotion (status) {
  return function (promo) {
    const restrictions = promo.restrictions // This is the array of conditions - age, date, meteo, or, and
    // We need to evaluate each restriction
    let isValid = restrictions.map().reduce() // TODO

    if (isValid) {
      return promo.avantage
    } else {
      return {}
    }
  }
}

function isAgeValid (ageRestriction, status) {
  return (status.age >= ageRestriction.min && status.age <= ageRestriction.max)
}

function isMeteoValid (meteoRestriction, status) {
  let {is, minTemp} = meteoRestriction
  let currentMeteo = meteoService.getMeteo(status.location)
  return (is === currentMeteo.is && currentMeteo.temp >= minTemp)
}

function isDateValid (dateRestriction, status) {
  
}