# Tree: Preorder Traversal

## Intuition

The problem appears to be about traversing a binary tree in pre-order traversal, which means visiting each node in the order of root, left subtree, right subtree.

## Approach

The approach here is to perform a recursive pre-order traversal starting from the `root` node. At each node, we print its value and then recursively traverse its left and right subtrees. This approach ensures that we visit every node of the tree in the pre-order sequence.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree. This is because we visit each node exactly once.

- Space complexity: `O(h)`, where `h` is the height of the binary tree. In the worst-case scenario, the tree could be unbalanced, resulting in `O(n)` space complexity. However, in the average case where the tree is balanced, the space complexity is `O(log(n))` due to the recursive call stack.

## Code

```java
class Solution {
    /*
      Node is defined as

      class Node {
          int data;
          Node left;
          Node right;
      }
    */
    public static void preOrder(Node root) {
        System.out.print(root.data + " ");
        if (root.left != null) preOrder(root.left);
        if (root.right != null) preOrder(root.right);
    }
}
```
