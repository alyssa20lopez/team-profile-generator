// packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./dist/team.html');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// employeeArray
class Prompt {
  constructor() {
    this.employeeArray = [];
  }

  getEmployeeArray() {
    return this.employeeArray;
  }
}

// questions
questions() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'employeeRole',
      message: 'Which role would you like to add to the team?',
      choices: [
        'Engineer',
        'Intern',
        'Manager',
        'None']
    })
    .then(({ employeeRole }) => {
      if (employeeRole === 'Manager'){
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameValue => {
              if (nameValue) {
                return true;
              } else {
                console.log("Please enter a valid name!");
                return false;
              }
            }
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the manager's id?",
            validate: idValue => {
              if (idValue) {
                return true;
              } else {
                console.log("Please enter a valid id!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: emailValue => {
              if (emailValue) {
                return true;
              } else {
                console.log("Please enter a valid email address!");
                return false;
              }
            }
          },
          {
            type: 'number',
            name: 'officeNum',
            message: "What is the manager's office number?",
            validate: officeNumValue => {
              if (officeNumValue) {
                return true;
              } else {
                console.log("Please enter a valid office number!");
                return false;
              }
            }
          },
        ])
          // pushes manager data into arr
          .then((template) => {
            const addManager = new Manager(template.name, template.id, template.email, template.officeNum)
            this.employeeArray.push(addManager);

            this.questions();
          });

      } else if (employeeRole === 'Engineer') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameValue => {
              if (nameValue) {
                return true;
              } else {
                console.log("Please enter a valid name!");
                return false;
              }
            }
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the engineer's id?",
            validate: idValue => {
              if (idValue) {
                return true;
              } else {
                console.log("Please enter a valid id!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: emailValue => {
              if (emailValue) {
                return true;
              } else {
                console.log("Please enter a valid email address!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'github username',
            message: "What is the engineer's GitHub Username?",
            validate: githubUser => {
              if (githubUser) {
                return true;
              } else {
                console.log("Please enter a valid GitHub Username!")
                return false;
              }
            }
          },
          // pushes engineer info data arr
        ]).then(template => {
          const addEngineer = new Engineer(template.name, template.id, template.email, template.githubUser)
          this.employeeArray.push(addEngineer);
          // user back to menu
          this.questions();
        });

      } else if (employeeRole === 'Intern') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameValue => {
              if (nameValue) {
                return true;
              } else {
                console.log("Please enter a valid name!")
                return false;
              }
            }
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the intern's id?",
            validate: idValue => {
              if (idValue) {
                return true;
              } else {
                console.log("Please enter a valid id!")
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: emailValue => {
              if (emailValue) {
                return true;
              } else {
                console.log("Please enter a valid email address!")
                return false;
              }
            }
          },
          {
            type: 'input',
            name: "school",
            message: "Where does the intern attend school?",
            validate: schoolName => {
              if (schoolName) {
                return true;
              } else {
                console.log("Please enter the correct school name!")
                return false;
              }
            }
          },
        ])
          // pushes intern data into arr
          .then((template) => {
            const addIntern = new Intern(template.name, template.id, template.email, template.schoolName)
            this.employeeArray.push(addIntern);

            this.questions();
          });

      } else if (employeeRole === 'Done') {
        const createHTML = generateHTML(this.getEmployeeArray());
        fs.writeFile('./dist/index.html', createHTML, function (err) {
          if (err) throw err

          console.log('HTML file has been created!')
        });
      }
    })
}

// starts prompts
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;