const {expect} = require('@jest/globals')
const Engineer = require("../lib/Engineer");

// engineer’s name, ID, email, and GitHub username
it("object for engineer", () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.githubUser).toEqual(expect.any(string));
});

// finds GitHub Username from getGithubUser()
it("github username", () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getGithubUser()).toEqual(expect.stringContaining(intern,githubUser.toString()))
});

// finds role form getRole()
it('role of employee', () => {
  const engineer = new Engineer('Alyssa', 1015, 'alyssa20lopez@gmail.com', 'alyssa20lopez');

  expect(engineer.getRole()).toEqual("Engineer");
});