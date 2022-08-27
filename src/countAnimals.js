const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acumulador, { name, residents }) => {
      acumulador[name] = residents.length;
      return acumulador;
    }, {});
  }
  // if (animal.sex) {
  //   return 
  // }
  return species.find(({ name }) => name === animal.specie).residents.length;
}
console.log(countAnimals({ specie: 'giraffes' }));
module.exports = countAnimals;
// return species.find((element) => element.name === animal.specie).residents.length;
