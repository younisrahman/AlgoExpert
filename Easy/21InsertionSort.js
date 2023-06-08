function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j !== 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3, 1, 10]));
