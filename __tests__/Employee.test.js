// use Employee constructor
const {expect} = require('@jest/globals')
const Employee = require("../lib/Employee");

// create object for employee
it("object for employee", () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// finds name from getName()
it('employee name', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// finds id from getId()
it('employee id', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// finds email from getEmail()
it('employee email', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// finds role from getRole()
it('employee role', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});