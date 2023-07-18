def optimalFreelancing(jobs):
    # Write your code here.
    LENGTH_OF_WEEK = 7
    profit = 0
    jobs.sort(key=lambda job: job['payment'], reverse=True)
    timeLine = [False] * LENGTH_OF_WEEK
    for job in jobs:
        maxTime = min(job['deadline'], LENGTH_OF_WEEK)
        for time in reversed(range(maxTime)):
            if timeLine[time] == False:
                timeLine[time] = True
                profit += job['payment']
                break
    return profit
