function productSum(array, multiplier = 1) {
  // Write your code here.
  let sum = 0;
  for (let i of array) {
    if (typeof i === "object") {
      sum += productSum(i, multiplier + 1);
    } else {
      sum += i;
    }
  }
  return sum * multiplier;
}
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
