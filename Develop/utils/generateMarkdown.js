// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseEl = {
  badge: '',
  link: ''
}
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case 'MIT':
Object.assign(licenseEl, {badge: '(https://opensource.org/licenses/MIT)'})
      console.log(licenseEl.badge)
      break;
    case 'APACHE2.0':
        Object.assign(licenseEl, {badge: '(https://opensource.org/licenses/Apache-2.0)'})
      console.log('Its APACHE2.0')
      break;
      case 'ISC':
        Object.assign(licenseEl, {badge: '(https://opensource.org/licenses/ISC)'})
      console.log('Its ISC')
      break;
      case 'Boost':
        Object.assign(licenseEl, {badge: '(https://www.boost.org/LICENSE_1_0.txt)'})
      console.log('Its Boost')
      break;
  }
  console.log(licenseEl)
  renderLicenseLink(license)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(licenseEl)
  switch (license) {
    case 'MIT':
Object.assign(licenseEl, {link: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'})
      console.log(licenseEl.link)
      break;
    case 'APACHE2.0':
        Object.assign(licenseEl, {link: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'})
      console.log('Its APACHE2.0')
      break;
      case 'ISC':
        Object.assign(licenseEl, {link: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'})
      console.log('Its ISC')
      break;
      case 'Boost':
        Object.assign(licenseEl, {link: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)])'})
      console.log('Its Boost')
      break;
      
  }
  console.log(licenseEl)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let license = data.license
  renderLicenseBadge(license)
  return `# Project Title: ${data.title}

## Description: 
# ${data.description}

## Installation:
# ${data.installation}

## Usage:
# ${data.usage}

## Tests:
# ${data.tests}

## License
# ${licenseEl.link}${licenseEl.badge}
# ${data.license}

## Get in touch:
# Github: ${data.github}
# Email address: ${data.email}
`;
}

module.exports = generateMarkdown;
