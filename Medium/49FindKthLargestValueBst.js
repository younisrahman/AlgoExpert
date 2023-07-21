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

// O(k+h) space(h)
class TreeInfo {
  constructor(numberOfNodesVisited, lastVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.lastVisitedNodeValue = lastVisitedNodeValue;
  }
}

function findKthLargestValueInBst(tree, k) {
  let treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraversal(tree, k, treeInfo);
  return treeInfo.lastVisitedNodeValue;
}

function reverseInOrderTraversal(tree, k, treeInfo) {
  if (tree === null || treeInfo.numberOfNodesVisited >= k) {
    return;
  }

  reverseInOrderTraversal(tree.right, k, treeInfo);

  if (treeInfo.numberOfNodesVisited < k) {
    treeInfo.numberOfNodesVisited = treeInfo.numberOfNodesVisited + 1;
    treeInfo.lastVisitedNodeValue = tree.value;
    reverseInOrderTraversal(tree.left, k, treeInfo);
  }
}
