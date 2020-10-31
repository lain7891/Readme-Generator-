const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your readme?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the title of your readme?",
        name: "name",
      },
    ])
    .then((response) => {
      console.log(response);
    }),
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
