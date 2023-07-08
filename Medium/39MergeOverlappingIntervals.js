function mergeOverlappingIntervals(array) {
  // Write your code here.
  array.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [];
  let currentIntervals = array[0];
  mergedIntervals.push(currentIntervals);
  for (let nextIntervals of array) {
    let endCurrentInterval = currentIntervals[1];
    let startNextInterval = nextIntervals[0];
    let endNextInterval = nextIntervals[1];

    if (endCurrentInterval >= startNextInterval) {
      currentIntervals[1] = Math.max(endCurrentInterval, endNextInterval);
    } else {
      currentIntervals = nextIntervals;
      mergedIntervals.push(currentIntervals);
    }
  }
  return mergedIntervals;
}

console.log("====================================");
console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [4, 7],
    [3, 5],
    [9, 10],
    [6, 8],
  ])
);
console.log("====================================");
