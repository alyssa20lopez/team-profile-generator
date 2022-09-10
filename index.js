const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: CODE GOES HERE

const manager = new Manager();
const emp1 = "[]";
const inform = manager.inform(emp1)

console.log(emp1, "->", inform)

const engineer = new Engineer();
const emp2 = "[]";
const inform = engineer.inform(emp2)

console.log(emp2, "->", inform)

const intern = new Intern
const emp3 = "[]";
const inform = intern.inform(emp3)

console.log(emp3, "->", inform)