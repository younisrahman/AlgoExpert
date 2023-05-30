# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def evaluateExpressionTree(tree):
    # Write your code here.
    if tree.value >= 0:
        return tree.value
    
    leftValue = evaluateExpressionTree(tree.left)
    rightValue = evaluateExpressionTree(tree.right)

    if tree.value == -1:
        return leftValue + rightValue
    elif tree.value == -2:
        return leftValue - rightValue
    elif tree.value == -3:
        return int( leftValue / rightValue)
    else:
        return  leftValue * rightValue


tree = BinaryTree(-1)
tree.left = BinaryTree(-2)
tree.right = BinaryTree(-3)
tree.left.left = BinaryTree(-4)
tree.left.right = BinaryTree(2)
tree.left.left.left = BinaryTree(2)
tree.left.left.right = BinaryTree(3)
tree.right.left = BinaryTree(8)
tree.right.right = BinaryTree(3)

print(evaluateExpressionTree(tree))