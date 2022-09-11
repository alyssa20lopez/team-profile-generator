// packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// class containg questions


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
      'Not Applicable'
      ]
    })
    .then(({employeeRole}) => {
      if(employeeRole === 'Manager'){
        inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
      validate: nameValue => {
        if (nameValue) {
          return true;
        } else {
          console.log("Please enter a valid name!")
          return false;
        }
      }
    },


    
        ])
      }
    })

// generate HTML page file using FS