# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def heightBalancedBinaryTree(tree):
    treeInfo = getTreeInfo(tree)
    return treeInfo.isBalanced


class TreeInfo:
    def __init__(self, isBalanced, height):
        self.isBalanced = isBalanced
        self.height = height


def getTreeInfo(node):
    if node == None:
        return TreeInfo(True, -1)

    leftTreeInfo = getTreeInfo(node.left)
    rightTreeInfo = getTreeInfo(node.right)

    isBalanced = leftTreeInfo.isBalanced and rightTreeInfo.isBalanced and abs(
        leftTreeInfo.height - rightTreeInfo.height) <= 1

    height = max(leftTreeInfo.height, rightTreeInfo.height) + 1
    return TreeInfo(isBalanced, height)
