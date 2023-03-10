import { JSDOM } from 'jsdom';
import SVG from 'svg.js';
import fs from 'fs/promises';
import inquirer from 'inquirer';

const dom = new JSDOM(`<!DOCTYPE html><body></body></html>`);
global.document = dom.window.document;

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute('width', '500');
svg.setAttribute('height', '500');
document.body.appendChild(svg);

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

(async () => {
    const { default: inquirer } = await import('inquirer');

inquirer.prompt(questions).then(async answers => {
const svgDoc = SVG(svg);
const background = svgDoc.rect(500, 500).fill(answers.background);
const text = svgDoc.text(answers.text).fill(answers.color).move(50, 50);

  let shape;
  if (answers.shape === 'square') {
    shape = svgDoc.square(100).move(200, 200);
  } else if (answers.shape === 'circle') {
    shape = svgDoc.circle(100).move(200, 200);
  } else if (answers.shape === 'triangle') {
    shape = svgDoc.polygon('50,0 100,100 0,100').move(200, 200);
  }

 await fs.writeFileSync('mySvgFile.svg', svgDoc.svg());
  console.log('SVG file saved');
}).catch(error => {
  console.log(error);
});   
});
