// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?', //needs to be displayed as the title of the README once entered
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a summary of project:', //the information is added to the sections of the README accordingly
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'List names and links to GitHub profiles of all your collaborators:',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write test(s) for your application:',
    },
    {
       type: 'list',
       message: 'Choose a license for your application:',
       name: 'license',
       choices: ['WordPress', 'NPM', 'No License'], // when license is picked license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is convered under
    },
    {
        type: 'input',
        message: 'What is your GitHub username',
        name: 'Username', //When username is added then its added to the questions section with a link to the github profile
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email', //add to section of readme title questions with instructions on how to reach me with additional questions
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) throw err
        console.log("done")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response)
        const str = generateMarkdown(response)
        writeToFile("README.md", str)
    })
}


// Function call to initialize app
init();
