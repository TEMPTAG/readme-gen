// import inquirer from "inquirer";
// import fs from "fs";

// inquirer
//   .prompt([
//     {
//       // Title
//       // Text input
//       type: "input",
//       name: "title",
//       message: "What is the title of your project?",
//     },
//     {
//       // Description
//       // Text input
//       type: "input",
//       name: "description",
//       message: "What is the description of your project?",
//     },
//     {
//       // Installation
//       // Text input
//       type: "input",
//       name: "installation",
//       message: "Notes for installing your project?",
//     },
//     {
//       // License
//       // Drop-down menu with license options
//       // Generates a badge with the license at the top of the README
//       // Notice is added to the license section explaining which license the application is covered under
//       type: "list",
//       name: "license",
//       message: "What license do you want to use?",
//       choices: [
//         "MIT License",
//         "GNU General Public License v2 (GPLv2)",
//         "Apache License 2.0",
//         "GNU General Public License v3 (GPLv3)",
//         "BSD 3-Clause New or Revised License",
//       ],
//     },
//     {
//       // Usage
//       // Text input
//       type: "input",
//       name: "usage",
//       message: "What is the usage of your project?",
//     },
//     {
//       // Contributing
//       // Text input
//       type: "input",
//       name: "contributing",
//       message: "How can others contribute to your project?",
//     },
//     {
//       // Tests
//       // Text input
//       type: "input",
//       name: "tests",
//       message: "What tests have you run on your project?",
//     },
//     {
//       // Questions
//       // Enter GitHub username and it's added with a link to my GitHub profile
//       type: "input",
//       name: "github",
//       message: "What is your GitHub username?",
//     },
//     {
//       // Questions
//       // Enter email address and it's added with instructions on how to reach me with additional questions
//       type: "input",
//       name: "email",
//       message: "What is your email address?",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//     // const title = answers.title;
//     // const readme = `# ${title}`;
//     // fs.writeFile("README.md", readme, (err) =>
//     //   err ? console.error(err) : console.log("Success!")
//     // );
//   });

// Table of Contents
// Links to each section of the README

// From provided index.js:
// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    // Title
    // Text input
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    // Description
    // Text input
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "descriptionTwo",
    message: "What was your motivation for this project?",
  },
  {
    // Installation
    // Text input
    type: "input",
    name: "installation",
    message: "Notes for installing your project?",
  },
  {
    // License
    // Drop-down menu with license options
    // Generates a badge with the license at the top of the README
    // Notice is added to the license section explaining which license the application is covered under
    type: "list",
    name: "license",
    message: "What license do you want to use?",
    choices: [
      "MIT License",
      "GNU General Public License v2 (GPLv2)",
      "Apache License 2.0",
      "GNU General Public License v3 (GPLv3)",
      "BSD 3-Clause New or Revised License",
    ],
  },
  {
    // Usage
    // Text input
    type: "input",
    name: "usage",
    message: "What is the usage of your project?",
  },
  {
    // Contributing
    // Text input
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  {
    // Tests
    // Text input
    type: "input",
    name: "tests",
    message: "What tests have you run on your project?",
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
      console.log("Thank you, your README.md file has been generated!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeData = generateMarkdown(answers);
      writeToFile("README.md", readmeData);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
