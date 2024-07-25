// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    // Collecting Name for Copyright Info in ReadMe
    type: "input",
    name: "name",
    message: "What is your first and last name?",
  },
  {
    // Title
    // Text input
    type: "input",
    name: "title",
    message: "What is the title of the project or application?",
  },
  {
    // Collecting repo path for license badge
    type: "input",
    name: "repo",
    message: "What is your repo path?  (ex: readme-gen)",
  },
  {
    // Description
    // Text input
    type: "input",
    name: "description",
    message: "Provide a short description of the project:",
  },
  {
    // Installation
    // Text input
    type: "input",
    name: "installation",
    message: "Notes for installing the project:",
  },
  {
    // License
    // Drop-down menu with license options - top 5 GitHub licenses:
    // Generates a badge with the license at the top of the README
    // Notice is added to the license section explaining which license the application is covered under
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: [
      "MIT License",
      "GNU General Public License v2 (GPLv2)",
      "Apache License 2.0",
      "GNU General Public License v3 (GPLv3)",
      "BSD 3-Clause New or Revised License",
      "None",
    ],
  },
  {
    // Usage
    // Text input
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use:",
  },
  {
    // Contributing
    // Text input
    type: "input",
    name: "contributing",
    message: "How can others contribute to the project?",
  },
  {
    // Tests
    // Text input
    type: "input",
    name: "tests",
    message: "What tests have been run on the project?",
  },
  {
    // Questions
    // Enter GitHub username and it's added with a link to my GitHub profile
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    // Questions
    // Enter email address and it's added with instructions on how to reach me with additional questions
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        "Thank you, your generatedREADME.md file has been created! Check your root directory for the file."
      );
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeData = generateMarkdown(answers);
      writeToFile("generatedREADME.md", readmeData);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
