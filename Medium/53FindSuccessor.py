# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None, parent=None):
        self.value = value
        self.left = left
        self.right = right
        self.parent = parent


# def findSuccessor(tree, node):
#     inOrderTraversalOrder = getInOrderTraversalOrder(tree)

#     for idx, currentNode in enumerate(inOrderTraversalOrder):
#         if currentNode != node:
#             continue

#         if idx == len(inOrderTraversalOrder) - 1:
#             return None
#         return inOrderTraversalOrder[idx+1]


# def getInOrderTraversalOrder(node, orders=[]):

#     if node is None:
#         return orders

#     getInOrderTraversalOrder(node.left, orders)
#     orders.append(node)
#     getInOrderTraversalOrder(node.right, orders)

#     return orders


def findSuccessor(tree, node):
    if node.right is not None:
        return getLeftMostChild(node)
    return getRightMostChild(node)


def getLeftMostChild(node):
    currentNode = node.right

    while currentNode.left is not None:
        currentNode = currentNode.left
    return currentNode


def getRightMostChild(node):
    currentNode = node

    while currentNode.parent is not None and currentNode.parent.right == currentNode:
        currentNode = currentNode.parent

    return currentNode.parent
