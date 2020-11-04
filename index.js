const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");


// array of questions for user
const questions = [
  
      {
        type: "input",
        message: "What is the title of your readme?",
        name: "title",
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
        name: "contributors",
      },
      {
        type: "input",
        message: "How do you test this project?",
        name: "tests",
      },
      {
        type: "list",
        message: "Which license do you want to use?",
        name: "license",
        choices: ["MIT", "Mozilla Public License", "GPL", "Apache License", "GNU AGPLv3"] 
      },
      {
        type: "input",
        message: "What is your GitHub",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address",
        name: "email",
      },
]
inquirer.prompt(questions)

    .then(function (data) {
      const fileName = "testREADME.md";
      console.log(data);
      writeToFile(fileName, data);
    });




function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), null, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("DONE");
  });
}

