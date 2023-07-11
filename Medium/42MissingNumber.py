def missingNumbers(nums):
    # Write your code here.
    includeNumbers = set(nums)
    solution = []
    for num in range(1, len(nums)+3):
        if not num in includeNumbers:
            solution.append(num)

    return solution


print(missingNumbers([1, 2, 4]))
