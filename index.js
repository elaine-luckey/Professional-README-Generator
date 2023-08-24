// CommonJS module import statements; fs.promises for async/await
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const createMarkdown = require("./utils/generateFile");

// Asynchronous function to writeFile to the dist folder
const writeToDist = async (content) => {
  try {
    await writeFile("./dist/README.md", content);
  } catch (error) {
    console.log(error);
  }
};

// Prompt inquirer.js within the terminal
const promptInquirer = async () => {
  console.log("To create a README.md file, please answer the following prompts:");

  try {
    const data = await inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your Github username?:",
        validate: (userName) => {
          return userName
            ? true
            : console.log("Please enter your Github username", false);
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address so others may contact you for more information:",
        validate: (email) => {
          return email
            ? true
            : console.log("Please enter your email address", false);
        },
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of the repository:",
        validate: (title) => {
          return title
            ? true
            : console.log("Please give the README.md a title", false);
        },
      },
      {
        type: "input",
        name: "description",
        message: "Please give a description and/or purpose of your project:",
        validate: (des) => {
          return des ? true : console.log("Please describe the project", false);
        },
      },
      {
        type: "confirm",
        name: "installConfirm",
        message: "Does your project require any additional installation?:",
        default: false,
      },
      {
        type: "input",
        name: "installInput",
        message: "Define the additional installations required:",
        when: ({ installConfirm }) => {
          return installConfirm ? true : false;
        },
      },
      {
        type: "input",
        name: "usage",
        message: "How would this repository be used?:",
      },
      {
        type: "input",
        name: "contribute",
        message: "Who/how can someone contribute to this project?:",
      },
      {
        type: "input",
        name: "test",
        message: "What are the testing instructions for this project?:",
      },
      {
        type: "list",
        name: "license",
        message: "Please choose one of the following licenses:",
        choices: ["MIT", "Apache", "GNU GPL v3"],
        validate: (license) => {
          return license
            ? true
            : (console.log("Please choose a license"), false);
        },
      },
    ]);

    console.log(data)

    // Generate README.md file with the object returned from 'data'
    const readmeGenerated = createMarkdown(data);

    writeToDist(readmeGenerated);

    console.log("The README.md file has been generated in dist folder!");
  } catch (error) {
    console.log(error);
  }
};

promptInquirer();