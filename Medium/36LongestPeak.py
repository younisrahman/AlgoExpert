def longestPeak(array):
    # Write your code here.
    longestPeakLength = 0
    i = 1
    while i < len(array) - 1:
        isPeak = array[i-1] < array[i] and array[i] > array[i+1]
        if not isPeak:
            i += 1
            continue

        leftIdx = i-2
        while leftIdx >= 0 and array[leftIdx] < array[leftIdx+1]:
            leftIdx -= 1
        rightIdx = i+2
        while rightIdx < len(array) and array[rightIdx] < array[rightIdx - 1]:
            rightIdx += 1
        currentLength = rightIdx-leftIdx-1
        longestPeakLength = max(longestPeakLength, currentLength)
        i = rightIdx
    return longestPeakLength


print(longestPeak([1, 2, 3, 4, 5, 1]))
