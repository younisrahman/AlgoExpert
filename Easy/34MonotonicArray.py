def isMonotonic(array):
    # Write your code here.
    isNonDecreasing = True
    isNonIncreasing = True
    for i in range(1, len(array)):
        if array[i] < array[i-1]:
            isNonDecreasing = False
        if array[i] > array[i-1]:
            isNonIncreasing = False
    return isNonDecreasing or isNonIncreasing


print(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
