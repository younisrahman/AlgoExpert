def binaryTreeDiameter(tree):
    return get_tree_info(tree).diameter


def get_tree_info(tree):
    if tree is None:
        return TreeInfo(0, 0)

    left_tree_info = get_tree_info(tree.left)
    right_tree_info = get_tree_info(tree.right)

    longest_path_through_root = left_tree_info.height + right_tree_info.height
    max_diameters_so_far = max(
        left_tree_info.diameter, right_tree_info.diameter)
    current_diameter = max(longest_path_through_root, max_diameters_so_far)
    current_height = max(left_tree_info.height, right_tree_info.height) + 1

    return TreeInfo(current_diameter, current_height)


class TreeInfo:
    def __init__(self, diameter, height):
        self.diameter = diameter
        self.height = height
