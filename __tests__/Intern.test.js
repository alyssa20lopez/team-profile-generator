// use Intern constructor
const Intern = require("../lib/Intern");

// intern’s name, ID, email, and school
it("object for intern", () => {
  const intern = new Intern('Alyssa', 1015,'alyssa20lopez@gmail.com', 'UNCC');
  
  expect(intern.schoolName).toEqual(expect.any(string));
});

// finds school from getSchool()
it("school", () => {
  const intern = new Intern('Alyssa', 1015,'alyssa20lopez@gmail.com', 'UNCC');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// finds role from getRole()
it('role of employee', () => {
  const intern = new Intern('Alyssa', 1015,'alyssa20lopez@gmail.com', 'UNCC');

  expect(intern.getRole()).toEqual("Intern");
});
