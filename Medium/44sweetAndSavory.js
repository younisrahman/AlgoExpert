function sweetAndSavory() {
  // Write your code here.
  let dishes = [2, 4, -4, -7, 12, 100, -25];
  let target = -1;
  const sweetDishes = dishes
    .filter((dish) => dish < 0)
    .sort((a, b) => Math.abs(a) - Math.abs(b));
  const savoryDishes = dishes.filter((dish) => dish > 0).sort((a, b) => a - b);

  console.log("====================================");
  console.log(sweetDishes);
  console.log(savoryDishes);
  console.log("====================================");
  let bestPair = [0, 0];
  let bestDifference = Infinity;
  let sweetIndex = 0;
  let savoryIndex = 0;
  while (sweetIndex < sweetDishes.length && savoryIndex < savoryDishes.length) {
    const currentSum = sweetDishes[sweetIndex] + savoryDishes[savoryIndex];
    if (currentSum <= target) {
      const currentDifference = target - currentSum;
      if (currentDifference < bestDifference) {
        bestDifference = currentDifference;
        bestPair = [sweetDishes[sweetIndex], savoryDishes[savoryIndex]];
      }
      savoryIndex++;
    } else sweetIndex++;
  }
  return bestPair;
}

console.log("====================================");
console.log(sweetAndSavory());
console.log("====================================");
