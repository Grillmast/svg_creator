const Square = require("../lib/square");

describe("Square class", () => {
  test("renders correctly with default values", () => {
    const square = new Square();
    const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="50" width="100" height="100" fill=black/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black"></text>
      </svg>`;
    expect(square.render()).toBe(expectedOutput);
  });

  test("renders correctly with custom values", () => {
    const square = new Square("red", "white", "Hello");
    const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="50" width="100" height="100" fill="red"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">Hello</text>
      </svg>`; // Add closing </svg> tag
    expect(square.render()).toBe(expectedOutput);
  });
});
