# def firstDuplicateValue(array):
#     # Write your code here.
#     seen = set()
#     for value in array:
#         if value in seen:
#             return value
#         seen.add(value)
#     return -1

def firstDuplicateValue(array):
    # Write your code here.
    for value in array:
        absValue = abs(value)
        if array[absValue - 1] < 0:
            return absValue
        array[absValue-1] *= -1
    return -1


print(firstDuplicateValue([200, 1, 500, 200, 3, 3, 4]))
