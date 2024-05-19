# 2331. Evaluate Boolean Binary Tree

## Intuition

When initially examining this problem, it's clear that the binary tree nodes are used to represent Boolean values and logical operators (`OR` and `AND`). Leaf nodes are Boolean values (either `0` or `1`), and internal nodes are logical operators (`2` for OR, `3` for `AND`). The goal is to evaluate the tree from the bottom up, computing the value of the logical operations as we return from the recursive calls.

## Approach

1. **Base Case**: Check if the node is `null`. For the purpose of this problem, if a node is `null`, we can consider it to represent `false`.
2. **Boolean Values**: Directly return `true` or `false` if the node's value is `1` (`true`) or `0` (`false`) respectively.
3. **Recursive Case**:
   - Recursively evaluate the left and right subtrees.
   - Determine the logical operator at the current node:
     - If the value is `2` (`OR` operator), return the logical `OR` of the left and right subtree evaluations.
     - If the value is `3` (`AND` operator), return the logical `AND` of the left and right subtree evaluations.
4. **Edge Case Handling**: If the value of the node does not match expected values (`0`, `1`, `2`, or `3`), default to returning `false`.

## Complexity

- Time complexity: `O(n)` where `n` is the number of nodes in the tree. This is because each node is visited exactly once during the evaluation.

- Space complexity: `O(h)` where `h` is the height of the tree. This space is used by the call stack during recursion. In the worst case (a skewed tree), the space complexity could degrade to `O(n)`.

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
    public boolean evaluateTree(TreeNode root) {
        if (root == null) return false;

        if (root.val == 0) return false;
        if (root.val == 1) return true;

        boolean left = evaluateTree(root.left);
        boolean right = evaluateTree(root.right);

        if (root.val == 2) return left || right;
        if (root.val == 3) return left && right;

        return false;
    }
}
```
