# Employee Generator

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)

## Description

This is a challenge meant to demonstrate the skill set of my knowledge in building a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

### User Story

    - AS A manager
    - I WANT to generate a webpage that displays my team's basic info
    - SO THAT I have quick access to their emails and GitHub profiles


### Acceptance Criteria

    - GIVEN a command-line application that accepts user input
    - WHEN I am prompted for my team members and their information
    - THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    - WHEN I click on an email address in the HTML
    - THEN my default email program opens and populates the TO field of the email with the address
    - WHEN I click on the GitHub username
    - THEN that GitHub profile opens in a new tab
    - WHEN I start the application
    - THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    - WHEN I enter the team manager’s name, employee ID, email address, and office number
    - THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    - WHEN I select the engineer option
    - THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    - WHEN I select the intern option
    - THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    - WHEN I decide to finish building my team
    - THEN I exit the application, and the HTML is generated

## Installation
To begin run: npm i inquirer@8.2.4
then proceed with: node index.js
### Screenshot
This is a screenshot of the generated HTML webpage.
![Screenshots](/dist/image1.jpg)

### Video Walkthrough

https://drive.google.com/file/d/190GkWai7rguTdqQTdZvBWA7S3Mgh0qe-/view

## Usage
 
 This is a challenge designed by the University of Washington bootcamp to showcase the learning and understanding of coursework.
 
 ## Test
 Using Jest
 ## License
[Read MIT License](https://opensource.org/licenses/MIT)