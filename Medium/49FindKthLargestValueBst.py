# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def findKthLargestValueInBst(tree, k):
    # Write your code here.
    sortedNodeValue = []
    inOrderTraversal(tree, sortedNodeValue)

    return sortedNodeValue[len(sortedNodeValue)-k]


def inOrderTraversal(tree, sortedNodeValue):
    if tree == None:
        return

    inOrderTraversal(tree.left, sortedNodeValue)
    sortedNodeValue.append(tree.value)
    inOrderTraversal(tree.right, sortedNodeValue)
