function bubbleSort(array) {
  // Write your code here.
  let isSwap = false;
  let counter = 1;
  while (!isSwap) {
    isSwap = true;
    for (let i = 0; i < array.length + counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSwap = false;
      }
    }
    counter++;
  }
  return array;
}
function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3, 1, 10]));
