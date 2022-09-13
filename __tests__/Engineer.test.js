// use Engineer constructor
const Engineer = require("../lib/Engineer");

// engineer’s name, ID, email, and GitHub username
it("should create engineer github", () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getGithub()).toEqual('alyssa20lopez');
});

// gets GitHub Username from getGithubUser()
it("should get github username", () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getGithub()).toEqual('alyssa20lopez');
});

// gets role form getRole()
it('should get employee role', () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getRole()).toEqual("Engineer");
});