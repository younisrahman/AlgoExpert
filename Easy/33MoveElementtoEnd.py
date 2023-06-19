def moveElementToEnd(array, toMove):
    # Write your code here.
    i = 0
    j = len(array)-1
    while i < j:
        while i < j and array[j] == toMove:
            j -= 1
        if array[i] == toMove:
            swap(i, j, array)
        i += 1

    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


print(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
