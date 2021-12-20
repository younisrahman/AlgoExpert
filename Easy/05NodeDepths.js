const Nodedepth = ({ root, depth = 0 }) => {
  if (root == null) {
    return 0;
  }
  return (
    depth + Nodedepth(root.left, depth + 1) + Nodedepth(root.right, depth + 1)
  );
};

const Nodedepth2 = ({ root }) => {
  let stack = [{ node: root, depth: 0 }];
  let sumOfDepth = 0;
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sumOfDepth += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepth;
};

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
