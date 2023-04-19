const fs = require("fs");
const inquirer = require("inquirer");

const htmlTemplate = ``;

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

    const htmlFormat = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Mini-Project-Node</title>
</head>
<body>
    <header class="container" >
        <div class="row">
            <section class="column" id="title">
                <h1>Hi My name is ${response.name}.</h1>
                <p>I am from ${response.location}</p>
                <p>${response.bio}</p>
            </section>
        </div>
    </header>
    <main class="container>
         <section class="row table-area">
            <div class="column">
            <ul class="list">
                <li class="list-item">My Github username is <a href="https://github.com/${response.github}/">${response.github}</a></li>
                <li class="list-item"> LinkedIn: ${response.linkedin}</li>
            </ul>
            </div>
         </section>
    </main>
    
</body>
</html>
    `

    fs.writeFile("index.html", htmlFormat, function (err) {
        if (err) {
            throw err
        }
        console.log("Creating HTML file...");
    })


})