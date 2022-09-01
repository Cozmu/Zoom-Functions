const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsLocal() {
  const principal = { NE: [], NW: [], SE: [], SW: [] };
  const chaves = Object.keys(principal);
  return species.filter(({ location }) => chaves.includes(location)).map(({ name }) =>)
}
console.log(getAnimalsLocal());

function getAnimalMap(options) {
  // seu código aqui\
}

module.exports = getAnimalMap;
