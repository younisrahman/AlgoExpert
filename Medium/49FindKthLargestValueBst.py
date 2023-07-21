# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


# def findKthLargestValueInBst(tree, k):
#     # Write your code here.
#     sortedNodeValue = []
#     inOrderTraversal(tree, sortedNodeValue)

#     return sortedNodeValue[len(sortedNodeValue)-k]


# def inOrderTraversal(tree, sortedNodeValue):
#     if tree == None:
#         return

#     inOrderTraversal(tree.left, sortedNodeValue)
#     sortedNodeValue.append(tree.value)
#     inOrderTraversal(tree.right, sortedNodeValue)


# O(k+h) space(k+h)
class TreeInfo:
    def __init__(self, numberOfNodesVisited, latestVisitedNodeValue):
        self.numberOfNodesVisited = numberOfNodesVisited
        self.latestVisitedNodeValue = latestVisitedNodeValue


def findKthLargestValueInBst(tree, k):
    treeInfo = TreeInfo(0, -1)
    reverseInOrderTraversal(tree, k, treeInfo)
    return treeInfo.latestVisitedNodeValue


def reverseInOrderTraversal(tree, k, treeInfo):
    if tree == None or treeInfo.numberOfNodesVisited >= k:
        return

    reverseInOrderTraversal(tree.right, k, treeInfo)
    if treeInfo.numberOfNodesVisited < k:
        treeInfo.numberOfNodesVisited += 1
        treeInfo.latestVisitedNodeValue = tree.value
        reverseInOrderTraversal(tree.left, k, treeInfo)
