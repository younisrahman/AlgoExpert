// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) {
    return null;
  }

  let currentValue = preOrderTraversalValues[0];
  let rightSubtreeRootIdx = preOrderTraversalValues.length;

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    value = preOrderTraversalValues[i];
    if (value >= currentValue) {
      rightSubtreeRootIdx++;
    }
  }

  let leftSubtree = reconstructBst(
    preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
  );
  let rightSubtree = reconstructBst(
    preOrderTraversalValues.slice(
      rightSubtreeRootIdx,
      preOrderTraversalValues.length
    )
  );

  return new BST(currentValue, leftSubtree, rightSubtree);
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
