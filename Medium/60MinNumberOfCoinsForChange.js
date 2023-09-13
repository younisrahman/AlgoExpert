function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = denom; amount <= n; amount++) {
      numOfCoins[amount] = Math.min(
        numOfCoins[amount],
        1 + numOfCoins[amount - denom]
      );
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
