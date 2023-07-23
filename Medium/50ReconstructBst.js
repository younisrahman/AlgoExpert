// // This is an input class. Do not edit.
// class BST {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

// function reconstructBst(preOrderTraversalValues) {
//   if (preOrderTraversalValues.length === 0) {
//     return null;
//   }

//   let currentValue = preOrderTraversalValues[0];
//   let rightSubtreeRootIdx = preOrderTraversalValues.length;

//   for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
//     const value = preOrderTraversalValues[idx];
//     if (value >= currentValue) {
//       rightSubtreeRootIdx = idx;
//       break;
//     }
//   }

//   let leftSubtree = reconstructBst(
//     preOrderTraversalValues.slice(1, rightSubtreeRootIdx)
//   );
//   let rightSubtree = reconstructBst(
//     preOrderTraversalValues.slice(rightSubtreeRootIdx)
//   );

//   return new BST(currentValue, leftSubtree, rightSubtree);
// }

// // Do not edit the lines below.
// exports.BST = BST;
// exports.reconstructBst = reconstructBst;

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  let treeInfo = new TreeInfo(0);

  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) {
    return null;
  }
  let rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) {
    return null;
  }

  currentSubtreeInfo.rootIdx++;
  let leftSubTree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  let rightSubTree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );

  return new BST(rootValue, leftSubTree, rightSubTree);
}
