// function firstDuplicateValue(array) {
//   const seen = new Set();
//   for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     if (seen.has(value)) {
//       return value;
//     }
//     seen.add(value);
//   }
//   return -1;
// }

function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) {
      return absValue;
    }
    array[absValue - 1] *= -1;
  }
  return -1;
}
console.log("====================================");
console.log(firstDuplicateValue([2, 1, 300, 5, 300, 2]));
console.log("====================================");
