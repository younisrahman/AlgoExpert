// O(2^(n*m)) times || O(n*m) space
function numberOfWaysToTraverseGraph(width, height) {
  if (width === 1 || height === 1) return 1;

  return (
    numberOfWaysToTraverseGraph(width - 1, height) +
    numberOfWaysToTraverseGraph(width, height - 1)
  );
}

// O(n*m) times || O(n*m) space
function numberOfWaysToTraverseGraph(width, height) {
  let numOfWays = [];

  for (let i = 0; i < width; i++) {
    numOfWays[i] = new Array(height).fill(0);
  }

  for (let widthIdx = 0; widthIdx < width; widthIdx++) {
    for (let heightIdx = 0; heightIdx < height; heightIdx++) {
      if (widthIdx === 0 || heightIdx === 0) {
        numOfWays[widthIdx][heightIdx] = 1;
      } else {
        let waysLeft = numOfWays[widthIdx - 1][heightIdx];
        let waysUp = numOfWays[widthIdx][heightIdx - 1];
        numOfWays[widthIdx][heightIdx] = waysLeft + waysUp;
      }
    }
  }

  return numOfWays[width - 1][height - 1];
}

// O(n*m) times || O(1) space
function numberOfWaysToTraverseGraph(width, height) {
  let xDistanceToCorner = width - 1;
  let yDistanceToCorner = height - 1;

  let numerator = factorial(xDistanceToCorner + yDistanceToCorner);
  let denominator = factorial(yDistanceToCorner) * factorial(xDistanceToCorner);
  return Math.floor(numerator / denominator);
}

function factorial(num) {
  let result = 1;
  for (let n = 2; n <= num; n++) {
    result *= n;
  }
  return result;
}
