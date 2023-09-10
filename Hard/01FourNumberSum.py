def fourNumberSum(array, targetSum):
    allPairSum = {}
    quadruplets = []
    for i in range(1, len(array) - 1):
        for j in range(i+1, len(array)):
            currentSum = array[i] + array[j]
            difference = targetSum - currentSum
            if difference in allPairSum:
                for pair in allPairSum[difference]:
                    quadruplets.append(pair + [array[i], array[j]])

        for k in range(0, i):
            currentSum = array[i] + array[k]
            if currentSum not in allPairSum:
                allPairSum[currentSum] = [[array[k], array[i]]]
            else:
                allPairSum[currentSum].append([array[k], array[i]])

    return quadruplets
