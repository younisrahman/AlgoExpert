function optimalFreelancing(jobs) {
  const LENGTH_OF_WEEK = 7;
  let profit = 0;

  // Sort jobs array based on payment in descending order
  jobs.sort((a, b) => {
    if (a.payment < b.payment) {
      return 1;
    } else if (a.payment > b.payment) {
      return -1;
    }
    return 0;
  });

  // Create a timeline array with a length of LENGTH_OF_WEEK and initialize all elements as false
  let timeLine = Array(LENGTH_OF_WEEK).fill(false);

  // Iterate over each job
  for (const job of jobs) {
    let maxTime = Math.min(job["deadline"], LENGTH_OF_WEEK);

    // Iterate from maxTime - 1 to 0
    for (let i = maxTime - 1; i >= 0; i--) {
      if (!timeLine[i]) {
        timeLine[i] = true;
        profit += job["payment"];
        break;
      }
    }
  }

  return profit;
}
