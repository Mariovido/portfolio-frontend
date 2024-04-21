# 988. Smallest String Starting From Leaf

## Intuition

When given the problem of finding the lexicographically smallest string from the root to any leaf in a binary tree where each node has a value corresponding to letters from `a` to `z` (`0` to `25` respectively), a natural approach is to traverse the tree and generate all possible strings from the root to the leaves. Since we need the smallest lexicographical order, comparing strings during the depth-first traversal can help us pick the smallest one as we proceed.

## Approach

1. **Check for an empty tree**: If the tree is empty (`root` is `null`), immediately return an empty string as there are no paths to evaluate.
2. **Recursive Depth-First Search (DFS)**: Implement a helper function `dfs` which:
   - Receives a `node` and the `suffix` string accumulated from the `root` to this node.
   - Converts the node's value to the corresponding character and prepends it to the current `suffix`.
   - If the `node` is a leaf (both left and right children are null), returns the current `suffix`.
   - Recursively calls itself for non-null left and right children.
   - For nodes with two children, compares the results of left and right recursive calls and returns the lexicographically smaller string.
   - For nodes with one child, returns the result from the non-null side.
3. **Start DFS from the root**: The initial call to `dfs` is made with the `root` node and an empty string as suffix.

## Complexity

- Time complexity: `O(n * m)` where `n` is the number of nodes in the tree and `m` represents the maximum depth of the tree (or length of the longest path from root to a leaf). This is because for every leaf node, we potentially create and compare strings of length proportional to the depth of the tree.

- Space complexity: `O(n * m)` due to the recursive stack (which in the worst case could go as deep as the tree) and the space used to store the suffix strings for each path.

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
    public String smallestFromLeaf(TreeNode root) {
        if (root == null) return "";

        return dfs(root, "");
    }

    private String dfs(TreeNode node, String suffix) {
        if (node == null) return null;

        suffix = (char) ('a' + node.val) + suffix;

        if (node.left == null && node.right == null) return suffix;

        String left = dfs(node.left, suffix);
        String right = dfs(node.right, suffix);

        if (left != null && right != null) return left.compareTo(right) < 0 ? left : right;

        return left != null ? left : right;
    }
}
```
