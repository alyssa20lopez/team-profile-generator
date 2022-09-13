// use Employee constructor
const Employee = require("../lib/Employee");

// create object for employee
it("should create an employee object", () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// finds name from getName()
it('should get employee name', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// finds id from getId()
it('should get employee id', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// finds email from getEmail()
it('should get employee email', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
it('should get employee role', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});