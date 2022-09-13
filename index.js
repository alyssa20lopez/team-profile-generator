// packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./dist/team.html');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employeeArray = [];

// questions
questions();

function questions() {
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
    .then((answers) => {
      if (answers.employeeRole === 'Manager') {
        console.log('Manager!');
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the manager's id?"
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
          },
          {
            type: 'number',
            name: 'officeNum',
            message: "What is the manager's office number?"
          },
        ])
          // pushes manager data into arr
          .then((template) => {
            const addManager = new Manager(template.name, template.id, template.email, template.officeNum)
            employeeArray.push(addManager);

            questions();
          });

      } else if (employeeRole === 'Engineer') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the engineer's id?"
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
          },
          {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub Username?"
          },
          // pushes engineer info data arr
        ]).then(template => {
          const addEngineer = new Engineer(template.name, template.id, template.email, template.github)
          this.employeeArray.push(addEngineer);
          // user back to menu
          this.questions();
        });

      } else if (employeeRole === 'Intern') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is the intern's id?"
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
          },
          {
            type: 'input',
            name: "school",
            message: "Where does the intern attend school?"
          },
        ])
          // pushes intern data into arr
          .then((template) => {
            const addIntern = new Intern(template.name, template.id, template.email, template.schoolName)
            this.employeeArray.push(addIntern);

            this.questions();
          });

      } else if (employeeRole === 'Done') {
        const createHTML = generateHTML(employeeArray);
        fs.writeFile('./dist/index.html', createHTML, function (err) {
          if (err) throw err

          console.log('HTML file has been created!')
        });
      }
    })
};