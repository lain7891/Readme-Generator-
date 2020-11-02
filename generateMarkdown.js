// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/${encodeURI(data.license)}-<License>-<color>)

    # Project Title TITLE_NAME_HERE \n ${data.name}

    ## Description WRITE_DESCRIPTION_OF_PROJECT \n ${data.description}

    ## Table of Content

    * [Installation] (#-installation)
    * [Usage](#usage)
    * [License](#license)
    * [Badges] (#badges)
    * [Contributing] (#contributing)
    * [Tests] (#tests)
    * [Questions] (#questions)
    
    ## Installation STEP_BY_STEP_OF_WHAT_YOU_USED \n ${data.installation}

    ## Usage INCLUDE_SCREENSHOTS_VIDEO \n ${data.usage}

    ## License \n ${data.license}

    ## Badges \n ${data.badges}

    ## Contributing \n ${data.contributing}

    ## Tests \n ${data.tests}

    ## Questions \n ${data.questions}




  `;
}

module.exports = generateMarkdown;
