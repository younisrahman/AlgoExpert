function fourNumberSum(array, targetSum) {
  const allPairSum = {};
  const quadruplets = [];

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;

      if (difference in allPairSum) {
        for (const pair of allPairSum[difference]) {
          quadruplets.push([...pair, array[i], array[j]]);
        }
      }
    }

    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];

      if (!allPairSum[currentSum]) {
        allPairSum[currentSum] = [[array[k], array[i]]];
      } else {
        allPairSum[currentSum].push([array[k], array[i]]);
      }
    }
  }

  return quadruplets;
}
