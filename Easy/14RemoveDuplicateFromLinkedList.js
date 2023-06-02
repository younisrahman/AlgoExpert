function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let currentNode = linkedList;
  while (currentNode != null) {
    let nextDistinctNode = currentNode.next;
    while (
      nextDistinctNode != null &&
      nextDistinctNode.value == currentNode.value
    ) {
      nextDistinctNode = nextDistinctNode.next;
    }

    currentNode.next = nextDistinctNode;
    currentNode = currentNode.next;
  }
  return linkedList;
}
