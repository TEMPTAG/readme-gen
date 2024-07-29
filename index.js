// TODO: Include packages needed for this application
// Inquirer package to prompt the user with questions
import inquirer from "inquirer";
// File System package to write the generated README file
import fs from "fs";
// GenerateMarkdown function to generate the README content
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    // Collecting Name for Copyright Info in ReadMe and Name in Questions Section
    // Type defaults to "input" if type is not specified - omitting type on "input" questions for cleaner code
    name: "name",
    message: "What is your first and last name?",
  },
  {
    // Title Content:
    name: "title",
    message: "What is the title of the project or application?",
  },
  {
    // Collecting repo path for license badge
    name: "repo",
    message: "What is your repo path?  (ex: readme-gen)",
  },
  {
    // Description Section Content:
    name: "description",
    message: "Provide a short description of the project:",
  },
  {
    // Installation Section Content:
    name: "installation",
    message: "Notes for installing the project:",
  },
  {
    // Usage Section Content:
    name: "usage",
    message: "Provide instructions to use, and examples for use:",
  },
  {
    // Contributing Section Content:
    name: "contributing",
    message: "How can others contribute to the project?",
  },
  {
    // Tests Section Content:
    name: "tests",
    message: "What tests have been run on the project?",
  },
  {
    // Questions Section Content:
    // Enter GitHub username and it's added with a link to my GitHub profile
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    // Questions Section Content:
    // Enter email address and it's added with instructions on how to reach me with additional questions
    name: "email",
    message: "What is your email address?",
  },
  {
    // License Section Content:
    // Drop-down menu with license options - top 5 GitHub licenses:
    // Generates a badge with the license at the top of the README - renderLicenseBadge function
    // Notice is added to the license section explaining which license the application is covered under - renderLicenseSection function and renderLicenseLink function
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Write the generated README file to the root directory
  fs.writeFile(fileName, data, (err) => {
    // If there is an error, log the error to the console
    if (err) {
      console.error(err);
    } else {
      // If there is no error, log a success message to the console
      console.log(
        "Thank you, your generatedREADME.md file has been created! Check your root directory for the file."
      );
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    // Prompt the user with the questions array
    .prompt(questions)
    // Use the answers to generate the README content
    .then((answers) => {
      const readmeData = generateMarkdown(answers);
      // Write the README File with the generated data - .md file is named your repo path + README.md
      writeToFile(`${answers.repo}README.md`, readmeData);
    })
    // Catch any errors and log them to the console
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
