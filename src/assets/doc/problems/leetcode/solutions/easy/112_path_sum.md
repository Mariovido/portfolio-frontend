# 112. Path Sum

## Intuition

The problem aims to determine whether there exists a root-to-leaf path in a binary tree where the sum of node values along the path equals a given target sum. Initially, we traverse the tree using depth-first search (DFS), keeping track of the current sum along the path from the root to the current node. When we reach a leaf node, we check if the current sum equals the target sum.

## Approach

1. Initialize a recursive function `dfs` which takes three parameters: the current node, the current sum, and the target sum.
2. Inside the `dfs` function:
   - Increment the current sum by the value of the current node.
   - If the current node is a leaf node (i.e., both its left and right children are null), return true if the current sum equals the target sum.
   - Otherwise, recursively call `dfs` for the left and right children of the current node, passing the updated current sum.
3. In the `hasPathSum` function:
   - Check if the root is null. If it is, return false.
   - Call the `dfs` function with the root node, initial current sum as 0, and the target sum.
   - Return the result.

## Complexity

- Time complexity: `O(n)`. Traversing each node in the binary tree takes `O(n)`, where `n` is the number of nodes in the tree.

- Space complexity: `O(h)`, where `h` is the height of the binary tree. In the worst-case scenario, the height of the binary tree can be equal to the number of nodes in the tree, making the space complexity `O(n)`.

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
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;

        return dfs(root, 0, targetSum);
    }

    private boolean dfs(TreeNode node, int currentSum, int targetSum) {
        currentSum += node.val;

        if (node.left == null && node.right == null) return currentSum == targetSum;

        boolean leftResult = false;
        boolean rightResult = false;

        if (node.left != null) leftResult = dfs(node.left, currentSum, targetSum);
        if (node.right != null) rightResult = dfs(node.right, currentSum, targetSum);

        return leftResult | rightResult;
    }
}
```
