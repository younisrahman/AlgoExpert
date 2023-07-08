function zeroSumSubarray(nums) {
  // Write your code here.
  let sums = new Set([0]);
  currentSum = 0;
  for (let num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) {
      return true;
    }
    sums.add(currentSum);
  }
  return false;
}

console.log("====================================");
console.log(zeroSumSubarray([0]));
console.log("====================================");
