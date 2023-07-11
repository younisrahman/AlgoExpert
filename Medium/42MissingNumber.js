function missingNumbers(nums) {
  let includeNumbers = new Set(nums);
  let solution = [];
  for (let i = 1; i < nums.length + 3; i++) {
    if (!includeNumbers.has(i)) {
      solution.push(i);
    }
  }
  return solution;
}

console.log(missingNumbers([1, 2, 4]));
