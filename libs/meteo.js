// A fake meteo service
// TODO: replaced with real one

let meteo = module.exports = {}

meteo.getMeteo = (location) => {
  return {is: 'clear', temp: '25'}
}

return meteo

