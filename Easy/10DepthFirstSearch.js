class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

const root = new Node("a");

root.addChild("b");
root.addChild("c");
root.addChild("d");

root.children[0].addChild("e");
root.children[0].addChild("f");
root.children[2].addChild("g");
root.children[2].children[0].addChild("k");
root.children[2].addChild("h");
root.children[0].children[1].addChild("i");
root.children[0].children[1].addChild("j");

// Print the tree in depth-first order
const array = [];
root.depthFirstSearch(array);

console.log(array);
