// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string (no badge will be created)
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
  // If there is no license, return an empty string (no link will be created)
  if (!license || license === "None") {
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
function renderLicenseSection(license) {
  // If there is no license, return an empty string (no license section will be created)
  if (!license || license === "None") {
    return "";
  }
  // If there is a license, return the license section
  return `## License

  This project is covered under the ${license}. The details of the ${license} can be found on their site [HERE](${renderLicenseLink(
    license
  )}).  You can also see the full details of the [LICENSE](./LICENSE) for this specific project in the linked file.
`;
}

// TODO: Create a function to generate markdown for README
// Get the current year to add to the copyright at the bottom of the README
// Return the README content with the data from the user answers, build the data to be inserted into the README file
function generateMarkdown(data) {
  const currentYear = new Date().getFullYear();

  return `## <a name="top"></a>
  # ${data.title}

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
  }) — just do not call, because I probably will not answer.
  
  Did this project make your life better in any way, shape, or form?  Check out my other exceptionally rare moments of lucidity on my [GitHub Profile](https://github.com/${
    data.github
  })

  ---

  ${renderLicenseSection(data.license)}

  <div align="center">
  <em>Copyright © ${currentYear} ${
    data.name
  } - powered by caffine, love, and a little bit of fun</em>
  [Back to top](#top)
  </div>
  
  `;
}
// Export the generateMarkdown function to be used in index.js
export default generateMarkdown;
