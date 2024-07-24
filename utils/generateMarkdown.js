// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  }
  // If there is a license, return the license badge
  return `![License](https://img.shields.io/badge/License-${license.replace(
    / /g,
    "%20"
  )}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ---

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ---

  ## Questions

  Have questions about this project? Want to collaborate? Eager to discuss conspiracy theories or debate why your favorite car is not as cool as you think? [Email Me](mailto:${
    data.email
  }) — just do not call, because I probably will not answer...
  
  Did this project make your life better in any way, shape, or form?  Check out my other exceptionally rare moments of lucidity on my [GitHub Profile](https://github.com/${
    data.github
  })

  ---

  ## License
  ${data.license}
  
`;
}

export default generateMarkdown;
