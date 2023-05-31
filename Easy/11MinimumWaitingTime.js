function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  for (let idx = 0; idx < queries.length; idx++) {
    let queriesLeft = queries.length - (idx + 1);
    totalWaitingTime += queries[idx] * queriesLeft;
  }

  return totalWaitingTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
