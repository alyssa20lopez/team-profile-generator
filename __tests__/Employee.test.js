// use Employee constructor
const Employee = require("../lib/Employee");

// create object for employee
it("should create an object for employess info", () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// get id from first string in object
it('employee name', () => {
  const employee = new Employee('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
});

// get id from first number in object
// get id from second string in object
