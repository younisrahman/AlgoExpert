function collidingAsteroids(asteroids) {
  const resultStack = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      resultStack.push(asteroid);
      continue;
    }

    while (true) {
      if (resultStack.length === 0 || resultStack[resultStack.length - 1] < 0) {
        resultStack.push(asteroid);
        break;
      }

      const asteroidSize = Math.abs(asteroid);

      if (resultStack[resultStack.length - 1] > asteroidSize) {
        break;
      }

      if (resultStack[resultStack.length - 1] === asteroidSize) {
        resultStack.pop();
        break;
      }

      resultStack.pop();
    }
  }

  return resultStack;
}
