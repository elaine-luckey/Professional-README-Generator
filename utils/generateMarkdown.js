// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (typeof license === 'string') {
    let badgeLabel = license.replaceAll(" ", "&ensp;");
    return `
    [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
    `;
  } else {
    return ""; // Return an empty string if license is not a string or is undefined
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license.toLowerCase().replaceAll(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === "None") {
    return "";
  } else {

    return `
  ### Licensing 
  ${license}
  ${renderLicenseBadge(license)}
  `
}
};

  // Creates a section for embedding a video or gif for a Demo
function renderDemo(demoLink) {

  if (!demoLink) {
    return "";
  } else {

    return `
  ### Demo 
  ![Demo](${demoLink})
  `
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  const { github, licenseChoice, confirmLiveLink, liveSiteLink, siteDemoLink, ...info } = data;

  return `
  # ${info.projectTitle}

  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${info.description}
  ${renderLicenseSection(licenseChoice)} 
  ${renderDemo(siteDemoLink)}

  ## Installation 
  ${info.installationInstructions}

  ## Usage 
  ${info.usageInstructions}

  ## Contribution
  ${info.contributionInstructions}

  ## Testing
  ${info.testInstructions}

  ## Questions
  Reach out to the repo owner, [${github}](https://github.com/${github}) at ${info.questionsEmail}.
  `;
}

module.exports = generateMarkdown;