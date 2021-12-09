// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space
function findClosestValueInBST(tree, target) {
  return findClosestValueInBSTHelper(tree, target, Infinity);
}

function findClosestValueInBSTHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    findClosestValueInBSTHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    findClosestValueInBSTHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
