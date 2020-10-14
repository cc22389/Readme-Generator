const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT",
            "Other",
            "GP:v2",
            "Apache",
            "GPLv3",
            "BSD 3-clause",
            "Unlicense",
            "BSD 2-clause",
            "LGPLv3",
            "AGP:v3"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "what does the user need to know about contributing to the repository?"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("sampleREADME.md", generateMarkdown({...inquirerResponses}));
    })
}

init();