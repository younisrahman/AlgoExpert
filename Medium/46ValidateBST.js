// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  // Write your code here.
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;

  let isLeftValid = validateBstHelper(tree.left, minValue, tree.value);
  let isRightValid = validateBstHelper(tree.right, tree.value, maxValue);

  return isLeftValid && isRightValid;
}
