const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acumulador, { name, residents }) => {
      const x = acumulador;
      x[name] = residents.length;
      return acumulador;
    }, {});
  }
  if (Object.keys(animal).length > 1) {
    return species
      .find(({ name }) => name === animal.specie).residents
      .filter(({ sex }) => sex === animal.sex).length;
  }
  return species.find(({ name }) => name === animal.specie).residents.length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
