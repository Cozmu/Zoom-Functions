const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((element) => element.managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
