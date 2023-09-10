def taskAssignment(k, tasks):
    pairedTasks = []
    taskDurationsToIndices = getTaskDurationToIndices(tasks)

    sortedTasks = sorted(tasks)
    for idx in range(k):
        taskDuration = sortedTasks[idx]
        indicesWithTaskDuration = taskDurationsToIndices[taskDuration]
        task1Index = indicesWithTaskDuration.pop()

        task2SortedIndex = len(tasks) - 1 - idx
        task2Duration = sortedTasks[task2SortedIndex]
        indicesWithTaskDuration = taskDurationsToIndices[task2Duration]
        task2Index = indicesWithTaskDuration.pop()

        pairedTasks.append([task1Index, task2Index])

    return pairedTasks


def getTaskDurationToIndices(tasks):
    taskDurationsToIndices = {}

    for idx, taskDuration in enumerate(tasks):
        if taskDuration in taskDurationsToIndices:
            taskDurationsToIndices[taskDuration].append(idx)
        else:
            taskDurationsToIndices[taskDuration] = [idx]

    return taskDurationsToIndices
