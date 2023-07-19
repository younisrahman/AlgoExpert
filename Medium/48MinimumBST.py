# def minHeightBst(array):
#     return constructMinHeightBst(array, None, 0, len(array)-1)


# def constructMinHeightBst(array, bst, startIdx, endIdx):
#     if startIdx > endIdx:
#         return
#     midIdx = (startIdx+endIdx) // 2
#     valueToAdd = array[midIdx]
#     if bst == None:
#         bst = BST(valueToAdd)
#     else:
#         bst.insert(valueToAdd)

#     constructMinHeightBst(array, bst, startIdx, midIdx-1)
#     constructMinHeightBst(array, bst, midIdx+1, endIdx)
#     return bst

# def minHeightBst(array):
#     return constructMinHeightBst(array, None, 0, len(array)-1)


# def constructMinHeightBst(array, bst, startIdx, endIdx):
#     if startIdx > endIdx:
#         return
#     midIdx = (startIdx+endIdx) // 2
#     newBstNode = BST(array[midIdx])
#     if bst == None:
#         bst = newBstNode
#     else:
#         if array[midIdx] < bst.value:
#             bst.left = newBstNode
#             bst = bst.left
#         else:
#             bst.right = newBstNode
#             bst = bst.right
#     constructMinHeightBst(array, bst, startIdx, midIdx-1)
#     constructMinHeightBst(array, bst, midIdx+1, endIdx)
#     return bst

def minHeightBst(array):
    return constructMinHeightBst(array, 0, len(array)-1)


def constructMinHeightBst(array, startIdx, endIdx):
    if startIdx > endIdx:
        return None
    midIdx = (startIdx+endIdx) // 2
    bst = BST(array[midIdx])

    bst.left = constructMinHeightBst(array,  startIdx, midIdx-1)
    bst.right = constructMinHeightBst(array,  midIdx+1, endIdx)
    return bst


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)
