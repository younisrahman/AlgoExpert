def smallestDifference(arrayOne, arrayTwo):
    # Write your code here.
    arrayOne.sort()
    arrayTwo.sort()
    idxOne = 0
    idxTwo = 0
    smallestNumber = float('inf')
    currentNumber = float('inf')
    smallestPair = []
    while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
        firstNumber = arrayOne[idxOne]
        secondNumber = arrayTwo[idxTwo]
        if firstNumber < secondNumber:
            currentNumber = secondNumber - firstNumber
            idxOne += 1
        elif secondNumber < firstNumber:
            currentNumber = firstNumber - secondNumber
            idxTwo += 1
        else:
            return [firstNumber, secondNumber]

        if currentNumber < smallestNumber:
            smallestNumber = currentNumber
            smallestPair = [firstNumber, secondNumber]

    return smallestPair


arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
print(smallestDifference(arrayOne, arrayTwo))
