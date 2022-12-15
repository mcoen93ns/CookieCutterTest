/* eslint-disable no-plusplus */
function templateFunction(x) {
  return x / 2;
}

// Create a grid of x by x cells and give all cells a value of 0
function createGrid(x) {
  const grid = [];
  for (let i = 0; i < x; i++) {
    grid[i] = [];
    for (let j = 0; j < x; j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
}

module.exports = { templateFunction, createGrid };
