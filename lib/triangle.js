class Triangle {
  constructor(fill = "black", textFill = "black", text = "") {
    this.fill = fill;
    this.textFill = textFill;
    this.text = text;
  }

  render() {
    const width = 300;
    const height = 200;
    const area = (width * height) / 2;
    const fontSize = area === 0 ? 0 : Math.sqrt(area / 5) * 2;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
              <polygon points="50,0 100,150 0,150" fill="${this.fill}"/>
              <text x="50" y="90" font-size="${fontSize}" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
            </svg>`;
  }
}

module.exports = Triangle;
