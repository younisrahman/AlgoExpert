function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  let sortedNodeValue = [];
  inOrderTraversal(tree, sortedNodeValue);
  return sortedNodeValue[sortedNodeValue.length - k];
}

function inOrderTraversal(tree, sortedNodeValue) {
  if (tree === null) {
    return;
  }

  inOrderTraversal(tree.left, sortedNodeValue);
  sortedNodeValue.push(tree.value);
  inOrderTraversal(tree.right, sortedNodeValue);
}
