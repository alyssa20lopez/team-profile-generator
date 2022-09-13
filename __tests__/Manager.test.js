// use Manager constructor
const Manager = require("../lib/Manager");

// team manager’s name, employee ID, email address, and office number
it("should create manager officeNumber", () => {
  const manager = new Manager('Alyssa', 1015,'alyssa20lopez@gmail.com', 1);
  
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
it('should get employee role', () => {
  const manager = new Manager('Alyssa', 1015,'alyssa20lopez@gmail.com', 1);

  expect(manager.getRole()).toEqual("Manager");
});