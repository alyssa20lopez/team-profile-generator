// use Employee constructor
const Employee = require("../lib/Employee");

// create object for employee
it("should create an object for employess info", () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// get name from getName()
it('employee name', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId()
it('employee id', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// gets email from getEmail()
it('employee email', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
it('employee email', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});