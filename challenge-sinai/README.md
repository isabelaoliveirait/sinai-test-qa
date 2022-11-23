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



<!-- ABOUT THE PROJECT -->
## About The Project

[![Executation Screen Shot][product-screenshot3]]()
[![SINAI Screen Shot][product-screenshot]]()
[![Pipeline Screen Shot][product-screenshot1]]()
[![Build Screen Shot][product-screenshot2]]()



# Task: Automated some test cases.

Take the following into account:

● When a user goes into https://zenklub.com.br/auth/login and use qa-automation@zenklub.com
as email and qachallenge as password he needs to be able to login on our website. <br />
● After user login he should be redirected to /profile/sessions and should not have any session
scheduled. <br />
● When user clicks on “NOSSOS ESPECIALISTAS” he will be redirected to /busca. <br />
● When user clicks on “Gostei quero saber mais” on the first professional that appear on the list he
needs to be redirected to professional page. <br />
● When the user is on the professional page, he needs to see more information about the
professional he chose and select an hour. <br />
● Then validate that it is on the checkout page. <br />


### Built With

These were the frameworks used in the development of the challenge.I used Cypress in the most current version for the development of test scrits and I used the CI of the Github to include an automatic build with the result of the execution of my test cases. Thinking about the importance of having an automated pipeline and thus maintaining the quality of the project, an automated build was inserted through the github repository.

* [Cypress](https://www.cypress.io/)
* [CI Github](https://docs.github.com/pt/actions/guides/about-continuous-integration)

### Prerequisites

Pre-settings: <br />
● Chrome or similar Browser installed <br />
● Node.js installed <br />
● IDE installed <br />
● open IDE terminal and add cypress dependencies: npm install --save-dev cypress@7.1.0 <br />
● start cypress with: node_modules/.bin/cypress open <br />


### Installation

1. Get more context about the first steps here: [Guide install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
2. Clone the repo
   ```sh
   git clone https://github.com/isabelaoliveirait/challenge-zenklub
   or 
   download zip 
   ```
3. Install the cypress dependency
   ```sh
   npm install -D cypress@7.1.0
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

<!-- Solution -->
## Solution

* In the first moment of the project I navigated through the site to better understand the structure of the page and know the requested features.I noticed some things on the Zenklub plataform:
* The design page object pattern was implemented in the project to standardize the project and thus make it more organized.
* All nomenclatures were designed taking into account the principles of clean code in order to avoid code smells.

1. The site saves the user's session in the browser, which at first caused a little difficulty in running the automated tests, but after I realized this I was able to complete the steps.
* Once that was done, I started to implement the scenario that were requested:
1. I created the requested scenario simulating the user's behavior on the screen. In the created scenario include the steps necessary to simulate such behavior:
2. Access the Zenklub page
3. Login as an user on the Zenklub Page
4. The user search for a professional
5. The click on the button Gostei e Quero Saber Mais
6. The user select a schedule a meeting with the profissional
7. Validate that the user is on the checkout page'


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


