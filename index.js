const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "name",
        message: "What's your name?"
    },
    {
        name: "location",
        message: "Where are you located?"
    },
    {
        name: "bio",
        message: "Provide a short biography"
    },
    {
        name: "linkedin",
        message: "What is your LinkedIn URL?"
    },
    {
        name: "github",
        message: "What is your GitHub URL?"
    }
]).then((response) => {
    console.log(response);
})