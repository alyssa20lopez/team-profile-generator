class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  printInfo() {
    console.log(`The employee is ${this.name}`);
    console.log(`Their id number is ${this.id}`);
  }
}
module.exports = Employee;