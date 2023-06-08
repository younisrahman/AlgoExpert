def bubbleSort(array):
    # Write your code here.
    counter = 1
    isSwap = False
    while not isSwap:
        isSwap = True
        for i in range(len(array)-counter):
            if array[i] > array[i+1]:
                swap(i, i+1, array)
                isSwap = False
        counter += 1
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


print(bubbleSort([8, 5, 2, 9, 5, 6, 3, 1, 10]))
