const Shape = require("./shape");

class Square extends Shape {
  constructor(shapeColor = "black", textColor = "black", text = "") {
    super(shapeColor, textColor, text);
  }

  render() {
    return  `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="50" width="100" height="100" fill=${answers.shapeColor}/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`
  }
}


module.exports = Square;