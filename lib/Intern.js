const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {}
 
}

module.exports = Intern;

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;