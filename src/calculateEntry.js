const data = require('../data/zoo_data');
const x = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
function countEntrants(entrants) {
  return x.reduce((acumulador, { age }) => {
    let a = acumulador;
    if (age < 18) {
      a.child += 1;
    }
    if (age >= 18 && age < 50) {
      a.adult += 1;
    }
    if (age >= 50) {
      a.senior += 1;
    }
    return a;
  }, {});
}
console.log(countEntrants(x));

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
