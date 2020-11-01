const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")


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
        message: "What is the description?",
        name: "description",
      },
      {
        type: "input",
        message: "What are the instructions for installation?",
        name: "installation",
      },
      {
        type: "input",
        message: "What did you use to create this?",
        name: "usage",
      },
      {
        type: "input",
        message: "Who contributed in this project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "How do you test this project?",
        name: "test",
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
