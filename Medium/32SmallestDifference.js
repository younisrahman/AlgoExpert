function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallestNumber = Infinity;
  let currentNumber = Infinity;
  let smallestPair = [];
  let idxOne = 0;
  let idxTwo = 0;
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNumber = arrayOne[idxOne];
    let secondNumber = arrayTwo[idxTwo];
    if (firstNumber < secondNumber) {
      currentNumber = secondNumber - firstNumber;
      idxOne++;
    } else if (secondNumber < firstNumber) {
      currentNumber = firstNumber - secondNumber;
      idxTwo++;
    } else {
      return [firstNumber, secondNumber];
    }

    if (currentNumber < smallestNumber) {
      smallestNumber = currentNumber;
      smallestPair = [firstNumber, secondNumber];
    }
  }
  return smallestPair;
}
let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo));
