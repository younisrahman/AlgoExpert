// function minHeightBst(array) {
//   // Write your code here.
//   return constructMinHeightBst(array, null, 0, array.length - 1);
// }

// function constructMinHeightBst(array, bst, startIdx, endIdx) {
//   if (startIdx > endIdx) {
//     return;
//   }
//   let midIdx = Math.floor((startIdx + endIdx) / 2);
//   let valueToAdd = array[midIdx];
//   if (bst === null) bst = new BST(valueToAdd);
//   else bst.insert(valueToAdd);
//   constructMinHeightBst(array, bst, startIdx, midIdx - 1);
//   constructMinHeightBst(array, bst, midIdx + 1, endIdx);
//   return bst;
// }

// function minHeightBst(array) {
//   // Write your code here.
//   return constructMinHeightBst(array, null, 0, array.length - 1);
// }

// function constructMinHeightBst(array, bst, startIdx, endIdx) {
//   if (startIdx > endIdx) {
//     return;
//   }
//   let midIdx = Math.floor((startIdx + endIdx) / 2);
//   let newBstNode = new BST(array[midIdx]);

//   if (bst === null) bst = newBstNode;
//   else {
//     if (array[midIdx] < bst.value) {
//       bst.left = newBstNode;
//       bst = bst.left;
//     } else {
//       bst.right = newBstNode;
//       bst = bst.right;
//     }
//   }
//   constructMinHeightBst(array, bst, startIdx, midIdx - 1);
//   constructMinHeightBst(array, bst, midIdx + 1, endIdx);
//   return bst;
// }

function minHeightBst(array) {
  // Write your code here.
  return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(array, startIdx, endIdx) {
  if (startIdx > endIdx) {
    return null;
  }
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  let bst = new BST(array[midIdx]);

  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
