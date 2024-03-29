#include <bits/stdc++.h>
#define ll long long int
#define FastIO                        \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);                       \
    cout.tie(0);
using namespace std;
class Node
{

public:
    Node *left;
    Node *right;
    int data;
    Node(int val)
    {
        data = val;
        left = NULL;
        right = NULL;
    }
};

Node *createBinarySearchTree()
{
    Node *root = NULL;
    std::cout << "Enter Data : ";
    int d;
    cin >> d;
    cout << std::endl;
    if (d == -1)
        return NULL;

    root = new Node(d);
    std::cout << "Enter left Data for " << d << std::endl;
    root->left = createBinarySearchTree();

    std::cout << "Enter right Data for " << d << std::endl;
    root->right = createBinarySearchTree();

    return root;
}

void printBinaryTree(const std::string &prefix, const Node *node, bool isLeft)
{
    if (node != nullptr)
    {
        std::cout << prefix;

        std::cout << (isLeft ? "left├──" : "rght└──");

        // print the value of the node
        std::cout << node->data << std::endl;

        // enter the next tree level - left and right branch
        printBinaryTree(prefix + (isLeft ? "│   " : "    "), node->left, true);
        printBinaryTree(prefix + (isLeft ? "│   " : "    "), node->right, false);
    }
}

void printBinaryTree(const Node *node)
{
    printBinaryTree("", node, false);
}

int findClosestValueInBst(Node *tree, int target)
{
    // Write your code here..
    int closest = std::numeric_limits<int>::max() - abs(target);
    while (tree != NULL)
    {
        if (target == tree->data)
        {
            return tree->data;
        }
        if (abs(closest - target) > abs((tree->data) - target))
        {
            closest = tree->data;
        }
        if (target > tree->data)
        {
            tree = tree->right;
        }
        else
        {
            tree = tree->left;
        }
    }
    return closest;
}
int main()
{
    FastIO;

    Node *root = createBinarySearchTree();

    printBinaryTree(root);
    std::cout << findClosestValueInBst(root, 12) << std::endl;
    return 0;
}