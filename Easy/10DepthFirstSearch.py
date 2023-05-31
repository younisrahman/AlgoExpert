# Do not edit the class below except
# for the depthFirstSearch method.
# Feel free to add new properties
# and methods to the class.
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array
        

root = Node("a")

# Add two children to the root node
root.addChild("b")
root.addChild("c")
root.addChild("d")

# Add a child to the first child node
root.children[0].addChild("e")
root.children[0].addChild("f")
root.children[2].addChild("g")
root.children[2].children[0].addChild("k")
root.children[2].addChild("h")
root.children[0].children[1].addChild("i")
root.children[0].children[1].addChild("j")

# Print the results of the depth-first search
array = []
root.depthFirstSearch(array)
print(array)