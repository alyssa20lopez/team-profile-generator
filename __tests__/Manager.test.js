const Manager = require("../lib/Manager");

// team manager’s name, employee ID, email address, and office number
it("should create a Manager object", () => {
  const manager = new Manager('Alyssa', 1015,'alyssa20lopez@gmail.com', 1);
  
  expect(manager.officeNum).toEqual(expect.any(Number));
});

// finds role from getRole()
it('employee role', () => {
  const manager = new manager('Alyssa', 1015,'alyssa20lopez@gmail.com');

  expect(manager.getRole()).toEqual("Manager");
});