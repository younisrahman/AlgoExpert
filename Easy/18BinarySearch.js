function binarySearch(array, target) {
  // Write your code here.
  let ans;
  let i = 0;
  let j = array.length;
  while (i <= j) {
    let middle = Math.round((i + j) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      i = middle + 1;
    } else {
      j = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 71));
