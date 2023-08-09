# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def symmetricalTree(tree):
    stackRight = [tree.right]
    stackLeft = [tree.left]

    while len(stackLeft) > 0:
        left = stackLeft.pop()
        right = stackRight.pop()

        if left == None and right == None:
            continue

        if left == None or right == None or left.value != right.value:
            return False

        stackLeft.append(left.left)
        stackLeft.append(left.right)
        stackRight.append(right.right)
        stackRight.append(right.left)

    return True


def symmetricalTree(tree):
    return treeAreMirrored(tree.left, tree.right)


def treeAreMirrored(left, right):
    if left is not None and right is not None and left.value == right.value:
        return treeAreMirrored(left.left, right.right) and treeAreMirrored(left.right, right.left)
    return left == right
