# 129. Sum Root to Leaf Numbers

## Intuition

The problem appears to involve traversing a binary tree and calculating the sum of numbers formed by concatenating digits along the path from the root to leaf nodes.

## Approach

1. Implement a recursive helper function that takes a node and the current sum formed so far.
2. If the node is `null`, return `0`.
3. Calculate the new sum by multiplying the current sum by `10` and adding the value of the current node.
4. If the `node` is a leaf (both left and right children are `null`), return the new sum.
5. Recur for the left and right subtrees, passing the new sum to each recursive call.
6. Return the sum of results obtained from the left and right subtrees.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree. Each node is visited once.

- Space complexity: `O(h)`, where `h` is the height of the binary tree. In the worst case, the recursion stack could go as deep as the height of the tree.

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
    public int sumNumbers(TreeNode root) {
        return sumNumbersHelper(root, 0);
    }

    private int sumNumbersHelper(TreeNode node, int currentSum) {
        if (node == null) return 0;

        int newSum = currentSum * 10 + node.val;

        if (node.left == null && node.right == null) return newSum;

        int leftSum = sumNumbersHelper(node.left, newSum);
        int rightSum = sumNumbersHelper(node.right, newSum);

        return leftSum + rightSum;
    }
}
```
