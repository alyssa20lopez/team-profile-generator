// use Manager constructor
const Manager = require("../lib/Manager");

// team manager’s name, employee ID, email address, and office number
it("object for manager", () => {
  const manager = new Manager('Alyssa', 1015,'alyssa20lopez@gmail.com', 1);
  
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// finds role from getRole()
it('role of employee', () => {
  const manager = new Manager('Alyssa', 1015,'alyssa20lopez@gmail.com', 1);

  expect(manager.getRole()).toEqual("Manager");
});