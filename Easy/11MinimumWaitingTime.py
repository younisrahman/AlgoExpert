def minimumWaitingTime(queries):
    queries.sort()

    totalWaitingTime = 0
    for idx, duration in enumerate(queries):
        queriesLeft = len(queries) - (idx+1)
        totalWaitingTime += duration * queriesLeft

    # Write your code here.
    return totalWaitingTime

print(minimumWaitingTime([3,2,1,6,2]))
