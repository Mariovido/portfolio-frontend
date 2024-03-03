# 543. Diameter of Binary Tree

## Intuition

The problem requires finding the diameter of a binary tree, which is defined as the number of nodes along the longest path between any two nodes in the tree. An intuitive approach to solving this problem involves traversing the tree recursively and keeping track of the depth and diameter at each node.

## Approach

1. Implement a function `diameterOfBinaryTree` that takes the root of the binary tree as input.
2. Inside the `diameterOfBinaryTree` function, check if the root is `null`. If so, return `0`, indicating an empty tree.
3. Call a recursive helper function `dfs` to perform depth-first search traversal on the binary tree.
4. Inside the `dfs` function, handle the base case where the current node is `null`. In this case, return an array containing `[0, 0]` indicating the depth and diameter as `0`.
5. Recursively call `dfs` on the left and right child nodes of the current node.
6. Calculate the `depth` of the current node as the maximum depth between its left and right children, plus `1`.
7. Calculate the `diameter` of the current node as the maximum value between:
   - The sum of depths of left and right subtrees.
   - The maximum diameter from left and right subtrees.
8. Return an array containing the `depth` and `diameter` of the current node.
9. Finally, return the `diameter` obtained from the root node as the result.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree. Each node is visited once during the depth-first search traversal.

- Space complexity: `O(n)`, considering the space used by the recursive call stack during the depth-first search traversal.

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
    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) return 0;

        return dfs(root)[1];
    }

    private int[] dfs(TreeNode node) {
        if (node == null) return new int[]{0, 0};

        int[] left = dfs(node.left);
        int[] right = dfs(node.right);

        int depth = Math.max(left[0], right[0]) + 1;
        int diameter = Math.max(left[0] + right[0], Math.max(left[1], right[1]));

        return new int[]{depth, diameter};
    }
}
```
