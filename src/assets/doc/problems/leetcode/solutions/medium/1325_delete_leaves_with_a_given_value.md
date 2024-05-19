# 1325. Delete Leaves With a Given Value

## Intuition

The problem requires removing leaf nodes from a binary tree if their value matches a given target. My first thought is to use a post-order traversal (left-right-root) to ensure that we check and possibly remove child nodes before evaluating the parent node.

## Approach

1. Start with the base case: if the current node is `null`, return `null`
2. Recursively call the `removeLeafNodes` function on the left and right children of the current node.
3. After processing both children, check if the current node is a leaf node (i.e., both left and right children are `null`) and if its value equals the target.
4. If both conditions are met, return `null` to remove this leaf node
5. Otherwise, return the current node.

## Complexity

- Time complexity:`O(n)` because each node in the tree is visited once.

- Space complexity:`O(h)`, where hhh is the height of the tree. This space is used by the recursion stack. In the worst case, `h` can be `n` (in a skewed tree), leading to `O(n)` space complexity.

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
    public TreeNode removeLeafNodes(TreeNode root, int target) {
        if (root == null) return null;

        root.left = removeLeafNodes(root.left, target);
        root.right = removeLeafNodes(root.right, target);

        if (root.left == null && root.right == null && root.val == target) return null;

        return root;
    }
}
```
