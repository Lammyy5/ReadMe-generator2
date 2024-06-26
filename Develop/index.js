// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'what is the title of your project?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'what is your email?',
	},
	{
		type: 'input',
		name: 'github',
		message: 'what is your github?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'How would you describe your project?',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'is there a process to install? if so describe it in detail',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'what is a usage case example of the project?',
	},
	{
		type: 'list',
		message: 'Please select a license applicable to this project?',
		name: 'license',
		choices: ['MIT', 'APACHE2.0', 'None'],
	},
	{
		type: 'input',
		name: 'contributors',
		message: '(Use Github)who contributributed to this project?',
	},
	{
		type: 'input',
		name: 'tests',
		message: 'What steps do you take to test this project?',
	},
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
	inquirer
		.prompt(questions)
		.then((data) => {
			console.log(data);
			const READMEtext = generateMarkdown(data);
            console.log(READMEtext)
            

			fs.writeFile('README.md', READMEtext, (err) =>
				err ? console.log(err) : console.log('Successfully created README.md')
			);
		});
}

// TODO: Create a function to initialize app
function init() {
	writeToFile();
}

// Function call to initialize app
init();
