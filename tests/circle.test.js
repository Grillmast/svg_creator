const Circle = require("../lib/circle");

describe("Circle class", () => {
  test("renders correctly with default values", () => {
    const circle = new Circle();
    const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="black"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black"></text>
      </svg>`;
    expect(circle.render()).toBe(expectedOutput);
  });

  test("renders correctly with custom values", () => {
    const circle = new Circle("red", "white", "Hello");
    const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="red"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Hello</text>
      </svg>`;
    expect(circle.render()).toBe(expectedOutput);
  });
});