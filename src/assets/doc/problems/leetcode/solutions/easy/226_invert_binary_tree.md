# 226. Invert Binary Tree

## Intuition

The problem requires inverting a binary tree, which means swapping the left and right subtrees of each node. Initially, we consider the base case where the `root` is `null`, in which case, we return `null`. Otherwise, we recursively invert the left and right subtrees of the current node.

## Approach

1. Start with the `root` of the binary tree.
2. If the `root` is `null`, return `null`.
3. Recursively invert the left subtree and store the result in `left`.
4. Recursively invert the right subtree and store the result in `right`.
5. Swap the `left` and `right` subtrees of the current node.
6. Return the `root` of the inverted binary tree.

## Complexity

- Time complexity: `O(n)` where `n` is the number of nodes in the binary tree. This is because we visit each node once.

- Space complexity: `O(h)` where `h` is the height of the binary tree. This is due to the recursion stack space used during the inversion process, which is proportional to the height of the tree.

## Code

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        TreeNode left = invertTree(root.left);
        TreeNode right = invertTree(root.right);

        root.left = right;
        root.right = left;

        return root;
    }
}
```
