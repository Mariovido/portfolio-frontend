# 104. Maximum Depth of Binary Tree

## Intuition

The problem asks for the maximum depth of a binary tree. The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node. The given code likely uses a recursive approach to traverse the tree and compute the maximum depth.

## Approach

1. Check if the `root` node is `null`. If it is, return `0` as there is no depth.
2. Recursively calculate the maximum depth of the left subtree by calling `maxDepth` on the left child of the `root`.
3. Recursively calculate the maximum depth of the right subtree by calling `maxDepth` on the right child of the `root`.
4. Return the maximum of the depths of the left and right subtrees plus `1` (for the current node).

## Complexity

- Time complexity:`O(n)`, where `n` is the number of nodes in the binary tree. This is because we visit each node exactly once during the traversal.

- Space complexity:`O(h)`, where `h` is the height of the binary tree. This is because the space used by the call stack during the recursive calls is proportional to the height of the tree. In the worst case, the tree is linear (each node has only one child), so the space complexity becomes `O(n)`.

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
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);

        return Math.max(leftDepth, rightDepth) + 1;
    }
}
```
