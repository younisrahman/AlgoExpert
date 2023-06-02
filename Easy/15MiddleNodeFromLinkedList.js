class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function middleNode(linkedList) {
  let slowNode = linkedList;
  let fastNode = linkedList;
  while (fastNode != null && fastNode.next != null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  return slowNode;
}

const linkedList = new LinkedList([1, 2, 3, 4, 5]);
const nn = middleNode(linkedList);

console.log(nn.value); // 3
