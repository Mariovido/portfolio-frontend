# 979. Distribute Coins in Binary Tree

## Intuition

The problem involves distributing coins in a binary tree such that each node ends up with exactly one coin. This can be achieved by balancing the number of coins through a series of moves between parent and child nodes. Each move represents transferring one coin from one node to its adjacent node. The goal is to find the minimum number of moves required.

## Approach

1. Use a depth-first search (DFS) to traverse the binary tree.
2. At each node, calculate the excess coins by considering the coins in the left and right subtrees.
3. The excess coins at a node are given by the formula:
   - `excess = ode.val + left subtree excess + right subtree excess - 1`
   - Here, the `-1` accounts for the one coin that should remain at the current node.
4. Accumulate the absolute value of the excess coins from the left and right subtrees to get the total number of moves.
5. Return the excess coins to the parent node, allowing the parent node to balance itself accordingly.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the tree.

- Space complexity: `O(h)`, where `h` is the height of the tree.

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
    private int moves = 0;

    public int distributeCoins(TreeNode root) {
        balanceCoins(root);
        return moves;
    }

    private int balanceCoins(TreeNode node) {
        if (node == null) return 0;

        int left = balanceCoins(node.left);
        int right = balanceCoins(node.right);

        moves += Math.abs(left) + Math.abs(right);

        return node.val + left + right - 1;
    }
}
```
