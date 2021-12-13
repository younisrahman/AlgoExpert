# recursive function
# O(n) time | O(h) space
def nodedepth(root, depth=0):
    if root is None:
        return 0
    return depth + nodedepth(root.left, depth + 1) + nodedepth(root.right, depth+1)

# iterative function
# O(n) time | O(h) space


def findtheddepth(root):
    stack = [{"node": root, "depth": 0}]
    sumOfDepth = 0
    while len(stack) > 0:
        nodeInfo = stack.pop()
        node, depth = nodeInfo["node"], nodeInfo["depth"]
        if node in None:
            continue
        sumOfDepth += depth
        stack.append({"node": node.left, "depth": depth+1})
        stack.append({"node": node.right, "depth": depth+1})
    return sumOfDepth
