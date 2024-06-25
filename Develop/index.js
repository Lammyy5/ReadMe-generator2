// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
	inquirer
		.prompt([
			{
				type: 'input',
				message: 'What is the title of your project',
				name: 'title',
			},
			{
				type: 'input',
				message: 'Describe what your project does',
				name: 'description',
			},
			{
				type: 'input',
				message: 'What are the steps required to install your project?',
				name: 'installation',
			},
			{
				type: 'input',
				message: 'Provide instructions and examples for use',
				name: 'usage',
			},
			{
				type: 'input',
				message:
					'What guidelines do you want to set for contributing to this project?',
				name: 'contributing',
			},
			{
				type: 'input',
				message: 'How did you test this project?Provide an example.',
				name: 'tests',
			},
			{
				type: 'list',
				message: 'How do you install your project?',
				name: 'license',
				choices: ['MIT', '', '', '', ''],
			},
			{
				type: 'input',
				message: 'What is your github username?',
				name: 'github',
			},
			{
				type: 'input',
				message: 'What is your email address?',
				name: 'email',
			},
		])
		.then((data) =>
			
				? console.log(data)
				: console.log('You forgot your password already?!')
		),
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', (err)=>
    err ? console.log(err) : console.log('Successfully created README.md'))
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
