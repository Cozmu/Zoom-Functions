const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const resultado = [];
  const colaborador = employees.filter((element) => element.id === id)
    .map(({ responsibleFor }) => responsibleFor[0]);
  const residentes = species.find((element) => element.id.includes(colaborador)).residents;
  const animalMaisVelho = residentes.sort((a, b) => b.age - a.age).slice(0, 1);
  animalMaisVelho.forEach(({ name, sex, age }) => resultado
    .push(name, sex, age));
  return resultado;
}
module.exports = getOldestFromFirstSpecies;
