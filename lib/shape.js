class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    setShapeColor(color) {
        this.shapeColor = color;
    }

    setTextColor(color) {
        this.textColor = color;
    }

    setText(text) {
        this.text = text;
    }

    render() {
        throw new Error("render() method not implemented");
    }
}

module.exports = Shape;