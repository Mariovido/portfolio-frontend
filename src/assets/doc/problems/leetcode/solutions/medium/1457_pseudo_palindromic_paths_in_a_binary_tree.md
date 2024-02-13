# 1457. Pseudo-Palindromic Paths in a Binary Tree

## Intuition

The problem involves traversing a binary tree and checking whether there exists a path from the root to a leaf such that the frequency of each digit in the path forms a palindrome. To achieve this, we can use a depth-first search (DFS) approach to traverse the tree and maintain a count of the frequency of each digit along the path.

## Approach

1. Initialize an array `counter` of size `10` to keep track of the frequency of each digit in the current path.
2. Initialize a variable `numOdd` to keep track of the number of digits with an odd frequency in the current path.
3. Perform a DFS traversal of the tree, updating the `counter` and `numOdd` at each step.
4. At each leaf node, check if the number of digits with odd frequency (`numOdd`) is at most `1`. If true, increment the `paths` counter.
5. Continue the DFS traversal for both the left and right children of each node.
6. Backtrack by decrementing the frequency of the current node's value in the `counter` array.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree. Each node is visited exactly once.

- Space complexity: `O(h)`, where `h` is the height of the binary tree. The space is used for the recursive call stack during the DFS traversal, and in this case, it is proportional to the height of the tree.

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
    int paths = 0;

    public int pseudoPalindromicPaths (TreeNode root) {
        int[] counter = new int[10];
        int numOdd = 0;

        dfs(root, counter, numOdd);
        return paths;
    }

    private void dfs(TreeNode node, int[] counter, int numOdd) {
        if (node == null) return;

        if (++counter[node.val] % 2 == 1) numOdd++;
        else numOdd--;

        if (node.left == null && node.right == null && numOdd <= 1) paths++;

        dfs(node.left, counter, numOdd);
        dfs(node.right, counter, numOdd);
        counter[node.val]--;
    }
}
```
