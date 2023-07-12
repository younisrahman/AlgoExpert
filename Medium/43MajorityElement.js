function majorityElement(array) {
  // Write your code here.
  let count = 0;
  let answer = null;

  for (let i of array) {
    if (count == 0) {
      answer = i;
    }

    if (answer == i) {
      count++;
    } else count--;
  }
  return answer;
}
