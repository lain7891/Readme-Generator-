// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
    # Project Title TITLE_NAME_HERE

    ## Description WRITE_DESCRIPTION_OF_PROJECT

    ## Table of Content

    * [Installation] (#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Badges] (#badges)
    * [Contributing] (#contributing)
    * [Tests] (#tests)
    * [Questions] (@questions)
    
    ## Installation STEP_BY_STEP_OF_WHAT_YOU_USED

    ## Usage INCLUDE_SCREENSHOTS_VIDEO

    ## License 

    ## Badges

    ## Contributing

    ## Tests 

    ## Questions




  `;
}

module.exports = generateMarkdown;
