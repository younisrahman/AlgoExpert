// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  let treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

function getTreeInfo(node) {
  if (node == null) {
    return new TreeInfo(true, -1);
  }

  const leftSubtree = getTreeInfo(node.left);
  const rightSubtree = getTreeInfo(node.right);
  const isBalanced =
    leftSubtree.isBalanced &&
    rightSubtree.isBalanced &&
    Math.abs(leftSubtree.height - rightSubtree.height) <= 1;

  const height = Math.max(leftSubtree.height, rightSubtree.height) + 1;

  return new TreeInfo(isBalanced, height);
}
