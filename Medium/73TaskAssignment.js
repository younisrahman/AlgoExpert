function taskAssignment(k, tasks) {
  const pairedTasks = [];
  const taskDurationsToIndices = getTaskDurationToIndices(tasks);

  const sortedTasks = [...tasks].sort((a, b) => a - b);
  for (let idx = 0; idx < k; idx++) {
    const taskDuration = sortedTasks[idx];
    const indicesWithTaskDuration = taskDurationsToIndices[taskDuration];
    const task1Index = indicesWithTaskDuration.pop();

    const task2SortedIndex = tasks.length - 1 - idx;
    const task2Duration = sortedTasks[task2SortedIndex];
    const indicesWithTaskDuration2 = taskDurationsToIndices[task2Duration];
    const task2Index = indicesWithTaskDuration2.pop();

    pairedTasks.push([task1Index, task2Index]);
  }

  return pairedTasks;
}

function getTaskDurationToIndices(tasks) {
  const taskDurationsToIndices = {};

  for (let idx = 0; idx < tasks.length; idx++) {
    const taskDuration = tasks[idx];
    if (taskDuration in taskDurationsToIndices) {
      taskDurationsToIndices[taskDuration].push(idx);
    } else {
      taskDurationsToIndices[taskDuration] = [idx];
    }
  }

  return taskDurationsToIndices;
}
