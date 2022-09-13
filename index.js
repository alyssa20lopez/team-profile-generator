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
        'I am finished with my team!']
    })
    .then((response) => {
      if (response.employeeRole === 'Manager') {
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
          .then((response) => {
            const addManager = new Manager(response.name, response.id, response.email, response.officeNum)
            employeeArray.push(addManager);

            questions();
          });

      } else if (response.employeeRole === 'Engineer') {
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
        ]).then(response => {
          const addEngineer = new Engineer(response.name, response.id, response.email, response.github)
          employeeArray.push(addEngineer);
          // sends user back to menu
          questions();
        });

      } else if (response.employeeRole === 'Intern') {
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
          .then((response) => {
            const addIntern = new Intern(response.name, response.id, response.email, response.schoolName)
            employeeArray.push(addIntern);

            questions();
          });

      } else if (response.employeeRole === 'Done') {
        const createHTML = generateHTML(employeeArray);
        fs.writeFile('./dist/index.html', createHTML, function (err) {
          if (err) throw err

          console.log('HTML file has been created!')
        });
      }
    })
};