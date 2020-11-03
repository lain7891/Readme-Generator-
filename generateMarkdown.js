// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/${encodeURI(
    data.license
  )}-License-<color>)

 ## Description  
${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)
    

    ## Installation  
    ${data.installation}

    ## Usage   
    ${data.usage}

    ## License 
    the license picked is  ${data.license}

    ## Contributors  
    ${data.contributors}

    ## Tests  
    ${data.tests}

    ## Questions  
    ${data.questions}




  `;
}

module.exports = generateMarkdown;
