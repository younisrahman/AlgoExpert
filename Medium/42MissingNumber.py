# def missingNumbers(nums):
#     # Write your code here.
#     includeNumbers = set(nums)
#     solution = []
#     for num in range(1, len(nums)+3):
#         if not num in includeNumbers:
#             solution.append(num)

#     return solution

def missingNumbers(nums):
    # Write your code here.
    total = sum(range(1, len(nums)+3))
    for num in nums:
        total -= num
    averageMissingValue = total // 2
    foundFirstHalf = 0
    foundSecondHalf = 0
    for num in nums:
        if num <= averageMissingValue:
            foundFirstHalf += num
        else:
            foundSecondHalf += num

    expectedFirstHalf = sum(range(1, averageMissingValue + 1))
    expectedSecondHalf = sum(range(averageMissingValue + 1, len(nums)+3))
    solution = [expectedFirstHalf - foundFirstHalf,
                expectedSecondHalf - foundSecondHalf]

    return solution


print(missingNumbers([1, 2, 4]))
