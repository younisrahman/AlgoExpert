// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function splitBinaryTree(tree) {
  const desiredSubtreeSum = getTreeSum(tree) / 2;
  const [_, canBeSplit] = trySubTree(tree, desiredSubtreeSum);
  return canBeSplit ? desiredSubtreeSum : 0;
}

function trySubTree(tree, desiredSubtreeSum) {
  if (!tree) {
    return [0, false];
  }

  const [leftSum, leftCanBeSplit] = trySubTree(tree.left, desiredSubtreeSum);
  const [rightSum, rightCanBeSplit] = trySubTree(tree.right, desiredSubtreeSum);

  const currentTreeSum = tree.value + leftSum + rightSum;
  const canBeSplit =
    leftCanBeSplit || rightCanBeSplit || currentTreeSum === desiredSubtreeSum;

  return [currentTreeSum, canBeSplit];
}

function getTreeSum(tree) {
  if (!tree) {
    return 0;
  }
  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right);
}

// Do not edit the line below.
exports.splitBinaryTree = splitBinaryTree;
