# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeDuplicatesFromLinkedList(linkedList):
    # Write your code here.

    # currentList = linkedList
    # while currentList is not None:
    #     if (currentList.value == currentList.next.value):
    #         temp = currentList.next.next
    #         currentList.next = temp
    #     currentList = currentList

    # return linkedList
    currentNode = linkedList
    while currentNode is not None:
        nextDistinctNode = currentNode.next
        while nextDistinctNode is not None and nextDistinctNode.value == currentNode.value:
            nextDistinctNode = nextDistinctNode.next

        currentNode.next = nextDistinctNode
        currentNode = currentNode.next
    return linkedList


linkedList = LinkedList(1)
linkedList.next = LinkedList(1)
linkedList.next.next = LinkedList(3)
linkedList.next.next.next = LinkedList(4)
linkedList.next.next.next.next = LinkedList(4)
linkedList.next.next.next.next.next = LinkedList(4)
linkedList.next.next.next.next.next.next = LinkedList(5)
linkedList.next.next.next.next.next.next.next = LinkedList(6)
linkedList.next.next.next.next.next.next.next.next = LinkedList(6)


sorterList = removeDuplicatesFromLinkedList(linkedList)
while linkedList:
    print(linkedList.value)
    linkedList = linkedList.next
