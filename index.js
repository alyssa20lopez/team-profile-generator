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
const inform2 = engineer.inform2(emp2)

console.log(emp2, "->", inform2)

const intern = new Intern
const emp3 = "[]";
const inform3 = intern.inform3(emp3)

console.log(emp3, "->", inform3)