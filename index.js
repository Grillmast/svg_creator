import { JSDOM } from 'jsdom';
import SVG from 'svg.js';
import fs from 'fs/promises';
import inquirer from 'inquirer';

const createSvgFile = async () => {
  try {
    // Create a virtual DOM environment with a blank HTML document
    const dom = new JSDOM(`<!DOCTYPE html><body></body></html>`);
    // Set the global `document` object to the document created by JSDOM
    global.document = dom.window.document;

    // Create an SVG element with a specified width and height, and append it to the document body
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '500');
    svg.setAttribute('height', '500');
    document.body.appendChild(svg);

    // Define an array of questions to be asked by Inquirer
    const questions = [
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
        name: 'color',
        message: 'Please select a color for the text in your logo',
        choices: ['white', 'black', 'blue', 'red', 'green', 'yellow']
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape for your logo',
        choices: ['square', 'circle', 'triangle']
      }
    ];

    // Prompt the user with the set of questions defined above
    const answers = await inquirer.prompt(questions);

    // Create an SVG document object using the previously created SVG element
    const svgDoc = SVG(svg);
    // Add a rectangle to the SVG document to use as the background, with the color specified by the user
    const background = svgDoc.rect(500, 500).fill(answers.background);
    // Add text to the SVG document, with the specified text and color, and position it at (50,50)
    const text = svgDoc.text(answers.text).fill(answers.color).move(50, 50);

    // Create a shape based on the user's choice of shape, and position it at (200,200)
    let shape;
    if (answers.shape === 'square') {
      shape = svgDoc.square(100).move(200, 200);
    } else if (answers.shape === 'circle') {
      shape = svgDoc.circle(100).move(200, 200);
    } else if (answers.shape === 'triangle') {
      shape = svgDoc.polygon('50,0 100,100 0,100').move(200, 200);
    }

    // Write the SVG document to a file named "mySvgFile.svg" in the current directory
    await fs.writeFile('mySvgFile.svg', svgDoc.svg());
    console.log('SVG file saved');
  } catch (error) {
    console.log(error);
  }
};

createSvgFile();
