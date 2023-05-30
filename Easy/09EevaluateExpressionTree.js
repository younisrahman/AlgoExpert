// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function evaluateExpressionTree(tree) {
//   // Write your code here.
//   if (tree.value >= 0) {
//     return tree.value;
//   }

//   leftValue = evaluateExpressionTree(tree.left);
//   rightValue = evaluateExpressionTree(tree.right);
//   console.log("====================================");
//   console.log(leftValue);
//   console.log(rightValue);
//   console.log(tree.value);
//   console.log("====================================");

//   if (tree.value == -2) return leftValue - rightValue;
//   if (tree.value == -1) return leftValue - rightValue;
//   if (tree.value == -3) return leftValue / rightValue;
//   return leftValue * rightValue;
// }

function evaluateExpressionTree({ value, left, right }) {
  if (value === -1)
    return evaluateExpressionTree(left) + evaluateExpressionTree(right);
  if (value === -2)
    return evaluateExpressionTree(left) - evaluateExpressionTree(right);
  if (value === -3)
    return Math.trunc(
      evaluateExpressionTree(left) / evaluateExpressionTree(right)
    );
  if (value === -4)
    return evaluateExpressionTree(left) * evaluateExpressionTree(right);
  return value;
}

const tree = new BinaryTree(-1);
tree.left = new BinaryTree(-2);
tree.right = new BinaryTree(-3);

tree.left.left = new BinaryTree(-4);
tree.left.right = new BinaryTree(2);

tree.left.left.left = new BinaryTree(2);
tree.left.left.right = new BinaryTree(3);

tree.right.left = new BinaryTree(8);
tree.right.right = new BinaryTree(3);

console.log(evaluateExpressionTree(tree));
// console.log(-2 == -"2");
