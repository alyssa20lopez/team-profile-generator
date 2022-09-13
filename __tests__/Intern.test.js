// use Intern constructor
const Intern = require("../lib/Intern");

// intern’s name, ID, email, and school
it("should create intern school", () => {
  const intern = new Intern('Alyssa', 1015,'alyssa20lopez@gmail.com', 'UNCC');
  
  expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets school from getSchool()
it("should get school", () => {
  const intern = new Intern('Alyssa', 1015,'alyssa20lopez@gmail.com', 'UNCC');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getss role from getRole()
it('role of employee', () => {
  const intern = new Intern('Alyssa', 1015,'alyssa20lopez@gmail.com', 'UNCC');

  expect(intern.getRole()).toEqual("Intern");
});
