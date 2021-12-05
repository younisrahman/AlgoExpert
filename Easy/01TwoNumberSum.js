let arr = [3, 5, -4, 8, 11, 1, 6, -1];
let target = 10;
// arr.sort((a, b) => a - b);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// } // O(n^2)

// for (let i = 0; i < arr.length; i++) {
//   let diff = target - arr[i];
//   if (arr.includes(diff) && diff !== arr[i]) {
//     console.log(arr[i], diff);
//   }
// } // O(n)

for (let i = 0; i < arr.length; i++) {
  let diff = target - arr[i];
  if (arr.includes(diff) && diff !== arr[i]) {
    console.log(arr[i], arr[arr.indexOf(diff)]);
  }
}

// for (let i = 0, j = arr.length - 1; i <= j; ) {
//   //   if (arr[i] + arr[j] === target) {
//   //     console.log(arr[i], arr[j]);
//   //   }
//   if (i === j) {
//     break;
//   }
//   if (target - arr[i] === arr[j]) {
//     console.log(arr[i], arr[j]);
//     break;
//   }

//   if (target - arr[i] < arr[j]) {
//     j--;
//   }
//   if (target - arr[i] > arr[j]) {
//     i++;
//   }
// } // O(n)
