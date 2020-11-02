// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/${encodeURI(data.license)}-License-<color>)

    # Project Title \n ${data.name}

    ## Description \n ${data.description}

    ## Table of Content

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation  \n ${data.installation}

    ## Usage  \n ${data.usage}

    ## License used for this website is \n ${data.license}

    ## Contributing \n ${data.contributing}

    ## Tests \n ${data.tests}

    ## Questions \n ${data.questions}




  `;
}

module.exports = generateMarkdown;
