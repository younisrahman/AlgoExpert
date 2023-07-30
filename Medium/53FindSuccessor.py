# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None, parent=None):
        self.value = value
        self.left = left
        self.right = right
        self.parent = parent


def findSuccessor(tree, node):
    inOrderTraversalOrder = getInOrderTraversalOrder(tree)

    for idx, currentNode in enumerate(inOrderTraversalOrder):
        if currentNode != node:
            continue

        if idx == len(inOrderTraversalOrder) - 1:
            return None
        return inOrderTraversalOrder[idx+1]


def getInOrderTraversalOrder(node, orders=[]):

    if node is None:
        return orders

    getInOrderTraversalOrder(node.left, orders)
    orders.append(node)
    getInOrderTraversalOrder(node.right, orders)

    return orders
