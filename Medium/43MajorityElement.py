def majorityElement(array):
    count = 0
    answer = None

    for value in array:
        if count == 0:
            answer = value

        if value == answer:
            count += 1
        else:
            count -= 1
    return answer


print(majorityElement([1, 2, 3, 2, 2, 1]))
