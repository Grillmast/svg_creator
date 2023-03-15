const Shape = require("./shape");

class Triangle extends Shape {
  constructor(shapeColor = "black", textColor = "black", text = "") {
    super(shapeColor, textColor, text);
  }

  render() {
    const base = 100;
    const height = 100;
    const area = (base * height) / 2;
    const textLength = this.text.length;
    const fontSize = Math.sqrt(area / textLength) * 2;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="50,0 100,150 0,150" fill="${this.shapeColor}"/>
      <text x="50" y="90" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = Triangle;