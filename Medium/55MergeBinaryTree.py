# # This is an input class. Do not edit.
# class BinaryTree:
#     def __init__(self, value, left=None, right=None):
#         self.value = value
#         self.left = left
#         self.right = right


# def mergeBinaryTrees(tree1, tree2):
#     if tree1 == None:
#         return tree2
#     if tree2 == None:
#         return tree1

#     tree1.value += tree2.value

#     tree1.left = mergeBinaryTrees(tree1.left, tree2.left)
#     tree1.right = mergeBinaryTrees(tree1.right, tree2.right)

#     return tree1


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def mergeBinaryTrees(tree1, tree2):
    if tree1 is None:
        return tree2

    tree1_stack = [tree1]
    tree2_stack = [tree2]

    while tree1_stack:
        tree1_node = tree1_stack.pop()
        tree2_node = tree2_stack.pop()

        if tree2_node is None:
            continue

        tree1_node.value += tree2_node.value

        if tree1_node.left is None:
            tree1_node.left = tree2_node.left
        else:
            tree1_stack.append(tree1_node.left)
            tree2_stack.append(tree2_node.left)

        if tree1_node.right is None:
            tree1_node.right = tree2_node.right
        else:
            tree1_stack.append(tree1_node.right)
            tree2_stack.append(tree2_node.right)

    return tree1
