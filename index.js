const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

// Define an array of questions to be asked by Inquirer
   inquirer
   .prompt([
    {
      type: 'list',
      name: 'background',
      message: 'Please provide the background color you would like for your logo.',
      choices: ['white', 'black', 'blue', 'red', 'green', 'yellow']
    },
    {
      type: 'input',
      name: 'text',
      message: 'Please enter the text you would like to add to your logo',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Please select a color for the text in your logo',
      choices: ['white', 'black', 'blue', 'red', 'green', 'yellow']
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please select a shape for your logo',
      choices: ['square', 'circle', 'triangle']
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Please select a color for your shape',
      choices: ['white', 'black', 'blue', 'red', 'green', 'yellow']
    },
  ])
  .then((answers) => {
    if (answers.shape === "square") {
      fs.writeFileSync("./dist/logo.svg",

      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <rect x="50" y="50" width="100" height="100" fill="${answers.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

      </svg>`
      );
    } else if (answers.shape === "circle") {
      fs.writeFileSync("./dist/logo.svg",

      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

      </svg>`
      );
    } else if (answers.shape === "triangle") {
      fs.writeFileSync("./dist/logo.svg",

     `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

     <polygon points="50,0 100,100 0,100" fill="${answers.shapeColor}"/>

    <text x="${(50 + 100 + 0) / 3}" y="${(0 + 100 + 100) / 3}" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

    </svg>`
      );
    }
    console.log("Generated logo.svg");
  })
  
   