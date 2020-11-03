// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/${encodeURI(
    data.license
  )}-License-<color>)

    # Project Title  
    ${data.name}

    ## Description  
    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)
    * [Tests](#tests)
    * [Questions](#questions)
    

    ## Installation  
    ${data.installation}

    ## Usage   
    ${data.usage}

    ## License 
    ${data.license}

    ## Contributors  
    ${data.contributors}

    ## Tests  
    ${data.tests}

    ## Questions  
    ${data.questions}




  `;
}

module.exports = generateMarkdown;
