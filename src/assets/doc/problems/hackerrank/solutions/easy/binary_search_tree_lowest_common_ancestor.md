# Binary Search Tree : Lowest Common Ancestor

## Intuition

The Lowest Common Ancestor (LCA) of two nodes in a binary search tree (BST) is the node that is furthest from the root and still an ancestor of both nodes. Since the BST has a specific property where all nodes in the left subtree are less than the root node, and all nodes in the right subtree are greater than the root node, we can utilize this property to find the LCA efficiently.

## Approach

We start traversing from the root node. At each step, we compare the values of the current node with the given values `v1` and `v2`. Depending on their relationship with the current node's value, we decide whether to move to the left subtree, right subtree, or return the current node as the LCA.

1. If both `v1` and `v2` are less than the current node's value, then the LCA must be in the left subtree. Recur for the left subtree.
2. If both `v1` and `v2` are greater than the current node's value, then the LCA must be in the right subtree. Recur for the right subtree.
3. If one value is greater and one is less than the current node's value, then the current node is the LCA.

Repeat this process until we find the LCA.

## Complexity

- Time complexity: `O(h)`, where `h` is the height of the tree. In a balanced BST, the height is logarithmic, `O(log(n))`, where `n` is the number of nodes. In the worst case, where the tree is skewed, the time complexity can be `O(n)` where `n` is the number of nodes.

- Space complexity: `O(h)`, where `h` is the height of the tree, due to the recursion stack space used by the function calls. In the worst case, the space complexity can be `O(n)` if the tree is skewed.

## Code

```java
class Result {
  	/*
    class Node
    	int data;
    	Node left;
    	Node right;
	  */
    public static Node lca(Node root, int v1, int v2) {
        if (root == null) return null;

        if (v1 < root.data && v2 < root.data) return lca(root.left, v1, v2);
        else if (v1 > root.data && v2 > root.data) return lca(root.right, v1, v2);
        else return root;
    }
}
```
