def findThreeLargestNumbers(array):
    # Write your code here.
    threeLargestNumber = [None, None, None]
    for i in array:
        updateLargest(threeLargestNumber, i)
    return threeLargestNumber


def updateLargest(threeLargestNumber, num):
    if threeLargestNumber[2] is None or num > threeLargestNumber[2]:
        shiftAndUpdate(threeLargestNumber, num, 2)
    elif threeLargestNumber[1] is None or num > threeLargestNumber[1]:
        shiftAndUpdate(threeLargestNumber, num, 1)
    elif threeLargestNumber[0] is None or num > threeLargestNumber[0]:
        shiftAndUpdate(threeLargestNumber, num, 0)


def shiftAndUpdate(array, num, idx):
    for i in range(idx+1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i+1]


print(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
