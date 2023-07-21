//O(n) space(n)
// function findKthLargestValueInBst(tree, k) {
//   // Write your code here.
//   let sortedNodeValue = [];
//   inOrderTraversal(tree, sortedNodeValue);
//   return sortedNodeValue[sortedNodeValue.length - k];
// }

// function inOrderTraversal(tree, sortedNodeValue) {
//   if (tree === null) {
//     return;
//   }

//   inOrderTraversal(tree.left, sortedNodeValue);
//   sortedNodeValue.push(tree.value);
//   inOrderTraversal(tree.right, sortedNodeValue);
// }

//O(k+h) space(k+h)
// function findKthLargestValueInBst(tree, k) {
//   // Write your code here.
//   let sortedNodeValue = [];
//   inOrderTraversal(tree, sortedNodeValue, k);
//   return sortedNodeValue[k - 1];
// }

// function inOrderTraversal(tree, sortedNodeValue, k) {
//   if (tree === null || sortedNodeValue.length === k) {
//     return;
//   }

//   inOrderTraversal(tree.right, sortedNodeValue, k);
//   sortedNodeValue.push(tree.value);
//   inOrderTraversal(tree.left, sortedNodeValue, k);
// }

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  let sortedNodeValue = [];
  inOrderTraversal(tree, sortedNodeValue, k);
  return sortedNodeValue[k - 1];
}

function inOrderTraversal(tree, sortedNodeValue, k) {
  if (tree === null || sortedNodeValue.length === k) {
    return;
  }

  inOrderTraversal(tree.right, sortedNodeValue, k);
  sortedNodeValue.push(tree.value);
  inOrderTraversal(tree.left, sortedNodeValue, k);
}
