// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  let inOrderTraversalOrder = getInOrderTraversalOrder(tree);

  for (const [idx, currentNode] of inOrderTraversalOrder.entries()) {
    if (currentNode != node) {
      continue;
    }
    if (idx === inOrderTraversalOrder.length - 1) {
      return null;
    }

    return inOrderTraversalOrder[idx + 1];
  }
}

function getInOrderTraversalOrder(node, orders = []) {
  if (node == null) {
    return orders;
  }

  getInOrderTraversalOrder(node.left, orders);
  orders.push(node);
  getInOrderTraversalOrder(node.right, orders);

  return orders;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
