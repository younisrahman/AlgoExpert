class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def middleNode(linkedList):
    # # Write your code here.
    # count = 0
    # currentNode = linkedList
    # while currentNode is not None:
    #     count += 1
    #     currentNode = currentNode.next
    # middleNode = linkedList
    # for _ in range(count // 2):
    #     middleNode = middleNode.next

    # return middleNode
    slowNode = linkedList
    fastNode = linkedList
    while fastNode is not None and fastNode.next is not None:
        slowNode = slowNode.next
        fastNode = fastNode.next.next
    return slowNode


linkedList = LinkedList(1)
linkedList.next = LinkedList(1)
linkedList.next.next = LinkedList(3)
linkedList.next.next.next = LinkedList(4)
linkedList.next.next.next.next = LinkedList(4)
linkedList.next.next.next.next.next = LinkedList(4)
linkedList.next.next.next.next.next.next = LinkedList(5)
linkedList.next.next.next.next.next.next.next = LinkedList(6)
linkedList.next.next.next.next.next.next.next.next = LinkedList(6)


sorterList = middleNode(linkedList)
while sorterList:
    print(sorterList.value)
    sorterList = sorterList.next
