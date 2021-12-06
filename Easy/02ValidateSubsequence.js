let arr = [5, 1, 22, 25, 6, -1, 8, 10];
let subArr = [-1, 22, 1, 10];

// function checkSubsequence(arr, subArr) {
//   for (let i = 0; i < subArr.length - 1; i++) {
//     // if (arr.includes(subArr[i])) {
//     if (
//       !arr.includes(subArr[i]) ||
//       arr.indexOf(subArr[i]) > arr.indexOf(subArr[i + 1])
//     ) {
//       return false;
//     }
//     // }
//     // else {
//     //   return false;
//     // }
//     // console.log(arr.indexOf(subArr[i]));
//     // console.log(arr.includes(subArr[i + 1]));
//   }
//   return true;
// }

// console.log(checkSubsequence(arr, subArr));

function checkSubsequence(arr, subArr) {
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (subArr[pointer] == arr[i]) {
      pointer++;
    }
  }

  return pointer === subArr.length;
}
console.log(checkSubsequence(arr, subArr));
