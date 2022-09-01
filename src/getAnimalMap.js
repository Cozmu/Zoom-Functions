const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsLocal() {
  return species.reduce((acc, curr) => { // com ajuda do video https://www.youtube.com/watch?v=O_bSjsLga48;
    acc[curr.location] = acc[curr.location] || [];
    acc[curr.location].push(curr.name);
    return acc;
  }, {});
}

function getAnimalsLocalName() {
  return species.reduce((acc, curr) => {
    acc[curr.location] = acc[curr.location] || [];
    acc[curr.location].push({ [curr.name]: curr.residents.map(({ name }) => name) });
    return acc;
  }, {});
}

function getTheAnimalsNameSortedPlace() {
  return species.reduce((acc, curr) => {
    acc[curr.location] = acc[curr.location] || [];
    acc[curr.location].push({
      [curr.name]: curr.residents
        .map(({ name }) => name).sort(),
    });
    return acc;
  }, {});
}

function getLocalAnimalsNameBySex(param) {
  return species.reduce((acc, curr) => {
    acc[curr.location] = acc[curr.location] || [];
    acc[curr.location].push({
      [curr.name]: curr.residents
        .filter(({ sex }) => sex === param).map(({ name }) => name),
    });
    return acc;
  }, {});
}

function getTheAnimalsNameSortedPlaceBySex(param) {
  return species.reduce((acc, curr) => {
    acc[curr.location] = acc[curr.location] || [];
    acc[curr.location].push({
      [curr.name]: curr.residents
        .filter(({ sex }) => sex === param).map(({ name }) => name).sort(),
    });
    return acc;
  }, {});
}

function getAnimalMap({ includeNames, sorted, sex } = {}) {
  if (includeNames && sorted && sex) {
    return getTheAnimalsNameSortedPlaceBySex(sex);
  }
  if (includeNames && sorted) {
    return getTheAnimalsNameSortedPlace();
  }
  if (includeNames && sex) {
    return getLocalAnimalsNameBySex(sex);
  }
  if (includeNames) {
    return getAnimalsLocalName();
  }
  return getAnimalsLocal();
}
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
/* function ifUm(a, b, c) {
  const x = c;
  console.log(c);
  if (a && b && c) {
    return getTheAnimalsNameSortedPlaceBySex(x);
  }
}

function ifDois(x, y) {
  console.log(x, y);
  if (x && y) {
    return getTheAnimalsNameSortedPlace();
  }
} */
/*
ifUm(includeNames, sorted, sex);
ifDois(includeNames, sorted);
*/
/*
if (includeNames && sorted && sex) {
  return getTheAnimalsNameSortedPlaceBySex(x);
}
if (includeNames && sorted) {
  return getTheAnimalsNameSortedPlace();
}
*/
