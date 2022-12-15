const { templateFunction, createGrid } = require("../src/template");

describe("TemplateFunction should return half of the provided", () => {
  it("2 -> 1 ", () => {
    expect(templateFunction(2)).toEqual(1);
  });
});

describe("CreateGrid should return a grid of x by x cells and give all cells a value of 0", () => {
  it("2 -> [[0,0],[0,0]] ", () => {
    expect(createGrid(2)).toEqual([
      [0, 0],
      [0, 0],
    ]);
  });
  it("3 -> [[0,0,0],[0,0,0],[0,0,0]] ", () => {
    expect(createGrid(3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
});
