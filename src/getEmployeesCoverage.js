const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsNames(idAnimals) {
  return species.filter(({ id }) => idAnimals.includes(id))
    .map(({ name }) => name);
}
function getAnimalsLocation(animals) {
  return species.filter(({ name }) => animals.includes(name))
    .map(({ location }) => location);
}
function getEmployeesObject() {
  return employees.map((elements) => ({
    id: elements.id,
    fullName: `${elements.firstName} ${elements.lastName}`,
    species: getAnimalsNames(elements.responsibleFor),
    locations: getAnimalsLocation(getAnimalsNames(elements.responsibleFor)),
  }));
}

function getEmployeesCoverage({ name, id } = {}) {
  if (!id && !name) {
    return getEmployeesObject();
  }
  const x = employees.some(({ lastName, firstName }) => lastName === name || firstName === name);
  if (x) {
    return getEmployeesObject().find((elements) => elements.fullName.includes(name));
  }
  const y = employees.some((elements) => elements.id === id);
  if (y) {
    return getEmployeesObject().find((elements) => elements.id.includes(id));
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
