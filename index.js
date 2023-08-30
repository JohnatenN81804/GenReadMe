// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); 

// Function to initialize the app and ask questions
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your Email?",
        name: "email",
      },
      {
        type: "input",
        message: "Who worked on this project?",
        name: "collaborators",
      },
      {
        type: "input",
        message: "How can someone install this project?",
        name: "install",
      },
    ])
    .then((response) => {
      console.log(response);
      writeToFile('README.md', generateMarkdown(response));
    });
}

// Function to write data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Success! File saved as', fileName);
    }
  });
}

// Initialize the application
init();
