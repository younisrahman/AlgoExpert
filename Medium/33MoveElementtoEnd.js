function moveElementToEnd(array, toMove) {
  // Write your code here.

  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) {
      swap(i, j, array);
    }
    i++;
  }
  return array;
}
function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log("====================================");
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
console.log("====================================");
