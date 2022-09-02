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
function refatorandoUm(includeNames, sorted, sex) {
  console.log(includeNames, sorted, sex);
  if (includeNames && sorted) {
    return getTheAnimalsNameSortedPlace();
  }

  if (includeNames) {
    return getAnimalsLocalName();
  }
}

function refatorandoDois(sorted, sex) {
  if (sorted && sex) {
    return getTheAnimalsNameSortedPlaceBySex(sex);
  }
  if (sex) {
    return getLocalAnimalsNameBySex(sex);
  }
}

function getAnimalMap({ includeNames, sorted, sex } = {}) {
  if (includeNames) {
    return refatorandoUm(includeNames, sorted, sex);
  }
  if (sex) {
    return refatorandoDois(sorted, sex);
  }
  return getAnimalsLocal();
}
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
