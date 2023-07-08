function bestSeat(seats) {
  // Write your code here.
  let bestSeat = -1;
  let maxSpace = 0;

  let left = 0;
  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && seats[right] === 0) {
      right++;
    }
    let currentLength = right - left - 1;
    if (currentLength > maxSpace) {
      bestSeat = Math.floor((right + left) / 2);
      maxSpace = currentLength;
    }
    left = right;
  }
  return bestSeat;
}
console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]));
