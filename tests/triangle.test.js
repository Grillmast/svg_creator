const Triangle = require("../lib/triangle");

describe("Triangle class", () => {
    test("renders correctly with default values", () => {
      const triangle = new Triangle();
      const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <polygon points="50,0 100,150 0,150" fill="black"/>
              <text x="50" y="90" font-size="${Math.sqrt(5000)}" text-anchor="middle" fill="black"></text>
            </svg>`;
      expect(triangle.render()).toBe(expectedOutput);
    });
  
    test("renders correctly with custom values", () => {
      const triangle = new Triangle("red", "white", "Hello");
      const area = (100 * 100) / 2;
      const fontSize = Math.sqrt(area / 5) * 2;
      const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
              <polygon points="50,0 100,150 0,150" fill="red"/>
              <text x="50" y="90" font-size="${fontSize}" text-anchor="middle" fill="white">Hello</text>
            </svg>`;
      expect(triangle.render()).toBe(expectedOutput);
    });
  });
  