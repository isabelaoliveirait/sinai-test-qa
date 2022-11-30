<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Github][github-shield]][github-url]
[![Gmail][gmail-shield]][gmail-url]

<!-- PROJECT LOGO -->
<br />

 
  <h3 align="center">QA Challenge-README-SINAI</h3>

  <p align="center">
    SINAI QA Challenge Documentation!
    <br />
    <a href=""><strong>Explore the docs »</strong></a>
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#solution">Solution</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

### Built With

These were the frameworks used in the development of the challenge.I used Cypress in the most current version for the development of test scrits and I used the CI of the Github to include an automatic build with the result of the execution of my test cases. Thinking about the importance of having an automated pipeline and thus maintaining the quality of the project, an automated build was inserted through the github repository.

* [Cypress](https://www.cypress.io/)
* [CI Github](https://docs.github.com/pt/actions/guides/about-continuous-integration)

### Prerequisites

Pre-settings: <br />
● Chrome or similar Browser installed <br />
● Node.js installed <br />
● IDE installed <br />
● open IDE terminal and add cypress dependencies: npm install --save-dev cypress@11.1.0 <br />
● start cypress with: node_modules/.bin/cypress open <br />


### Installation

1. Get more context about the first steps here: [Guide install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
2. Clone the repo
   ```sh
   or 
   download zip 
   ```
3. Install the cypress dependency
   ```sh
   npm install -D cypress@11.1.0
   ```
4. To open the cypress 
   ```sh
   nx cypress open 
   or
   ./node_modules/.bin/cypress open
   ```
5. Get more context about the first steps here: [Guide install Allure Report](https://docs.qameta.io/allure/)    
6. To clear the current report and create another one
   ```sh
   npm run allure:clear
   or
   rm -r allure-results/ allure-report || true
   ```
7. To generate the Allure report
   ```sh
   npm run allure:generate
   or
   allure generate allure-results
   ```
8. To generate the Allure report
   ```sh
   npm run cy:run
   or
   cypress run --config video=false --env allure=true
   ```
9. To open the Allure report
   ```sh
   npm run allure:open
   or
   allure open allure-report
   ```
10. Starting the Github Pipeline - Get more context about the first steps here: [Guide CI Github](https://www.youtube.com/watch?v=tYIKfQ3lgk0)
   ```sh
    actions
   ```   

<!-- CONTACT -->
## Contact

Isabela Barros - [@Linkedin](https://www.linkedin.com/in/isabelaoliveira26/) - isa.oliver20@gmail.com

Github Page: [Github](https://github.com/isabelaoliveirait)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/othneildrew
[github-shield]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/isabelaoliveirait
[gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: isa.oliver20@gmail.com
[product-screenshot]: https://imgur.com/uA1nKGi.png
[product-screenshot1]: https://imgur.com/ynEjzcP.png
[product-screenshot2]: https://imgur.com/ruxmTpE.png
[product-screenshot3]: https://imgur.com/WvkGSc8.png


