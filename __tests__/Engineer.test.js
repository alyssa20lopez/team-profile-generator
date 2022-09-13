// use Engineer constructor
const Engineer = require("../lib/Engineer");

// engineer’s name, ID, email, and GitHub username
it("object for engineer", () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getGithub()).toEqual(expect.any(string));
});

// finds GitHub Username from getGithubUser()
it("github username", () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getGithub()).toEqual('alyssa20lopez');
});

// finds role form getRole()
it('role of employee', () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getRole()).toEqual("Engineer");
});