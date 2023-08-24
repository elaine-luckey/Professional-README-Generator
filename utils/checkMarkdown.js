// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (typeof license === 'string') {
//     let badgeLabel = license.replaceAll(" ", "&ensp;");
//     return `
//     [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
//     `;
//   } else {
//     return ""; // Return an empty string if license is not a string or is undefined
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let linkUrl = license.toLowerCase().replaceAll(" ", "-");
//   return `https://choosealicense.com/licenses/${linkUrl}/.`;
// }
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

//   if (license === "None") {
//     return "";
//   } else {

//     return `
//   ### Licensing 
//   ${license}
//   ${renderLicenseBadge(license)}
//   `
// }
// };

//   // Creates a section for embedding a video or gif for a Demo
// function renderDemo(demoLink) {

//   if (!demoLink) {
//     return "";
//   } else {

//     return `
//   ### Demo 
//   ![Demo](${demoLink})
//   `
// }
// };

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   const { github, license, ...info } = data;

//   return `
//     # ${info.title}

//     ##Table of Contents
//     - [Description](#project-description)
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [Contribution](#contribution)
//     - [Testing](#testing)
//     - [Questions](#questions)

//     ##Project Description
//     ${info.about}
//     ${renderLicenseSection(license)}
//     ${renderDemo(info.siteDemoLink)}

//     ##Installation
//     ${info.install}

//     ##Usage
//     ${info.usage}

//     ##Contribution
//     ${info.collabName} (GitHub: ${info.collabLink})

//     ##Testing
//     ${info.testing}

//     ##Questions
//     Reach out to the repo owner, [${github}](https://github.com/${github}), at ${info.email}.
//   `;
// }

// module.exports = generateMarkdown;


// Check if Installation, Usage, Contributions, and Testing is necessary; if so, create header for the sections
const createInstall = (install) => {
  if (install) {
    return `## Installation
${install}`;
  } else {
    return "";
  }
};

const createUsage = (usage) => {
  if (usage) {
    return `## Usage
${usage}`;
  } else {
    return "";
  }
};

const createContribute = (contribute) => {
  if (contribute) {
    return `## Contributions
${contribute}`;
  } else {
    return "";
  }
};

const createTesting = (test) => {
  if (test) {
    return `## Testing
${test}`;
  } else {
    return "";
  }
};

// Create a badge for the selected license from the list
const createBadge = (license) => {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
};

// Check if Installation, Usage, Contributions, and Testing has any input; if so, create tabs for the section within the Table of Contents
const checkInstall = (install) => {
  if (install) {
    return "* [Installation](#installation)";
  } else {
    return "";
  }
};

const checkUsage = (usage) => {
  if (usage) {
    return "* [Usage](#usage)";
  } else {
    return "";
  }
};

const checkContribute = (contribute) => {
  if (contribute) {
    return "* [Contributions](#contributions)";
  } else {
    return "";
  }
};

const checkTesting = (test) => {
  if (test) {
    return "* [Testing](#testing)";
  } else {
    return "";
  }
};

module.exports = {
  createInstall,
  createUsage,
  createContribute,
  createTesting,
  createBadge,
  checkInstall,
  checkUsage,
  checkContribute,
  checkTesting,
};
