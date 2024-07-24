// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (!license || license === "None") {
    return "";
  }
  // If there is a license, return the license badge
  return `![License](https://img.shields.io/badge/License-${license.replace(
    / /g,
    "%20"
  )}-blue.svg)`;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license || license === "None") {
    // If there is no license, return an empty string
    return "";
  }
  // If there is a license, return the license link - top 5 licenses used on GitHub:
  const licenseLinks = {
    "MIT License": "https://opensource.org/licenses/MIT",
    "GNU General Public License v2 (GPLv2)":
      "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GNU General Public License v3 (GPLv3)":
      "https://www.gnu.org/licenses/gpl-3.0.en.html",
    "BSD 3-Clause New or Revised License":
      "https://opensource.org/licenses/BSD-3-Clause",
  };
  return licenseLinks[license];
}

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
  
  This project is under the ${data.license}.  The details of the ${
    data.license
  } can be found [here](${renderLicenseLink(data.license)}).

  _Copyright (c) 2024 Ian Ferguson_
  
`;
}

export default generateMarkdown;
