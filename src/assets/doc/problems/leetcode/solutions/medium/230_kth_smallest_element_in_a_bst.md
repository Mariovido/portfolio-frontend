# 230. Kth Smallest Element in a BST

## Intuition

The problem involves finding the `k^{th}` smallest element in a binary search tree (BST). The idea is to perform an in-order traversal of the BST and keep track of the count of visited nodes. When the count reaches `k`, the current node's value is the `k^{th}` smallest element.

## Approach

1. Initialize a variable `result` to store the `k^{th}` smallest element and a variable `count` to keep track of the number of visited nodes.
2. Perform a depth-first search (DFS) on the BST using in-order traversal.
3. During the traversal, increment the `count` when visiting a node.
4. If the `count` becomes equal to `k`, update the result with the current node's value and return.
5. Continue the DFS on the left subtree and then on the right subtree.

## Complexity

- Time complexity: `O(N)`, where `N` is the number of nodes in the binary tree. In the worst case, we might need to visit all nodes.

- Space complexity: `O(H)`, where `H` is the height of the binary tree. In the worst case, the recursion stack can go up to the height of the tree.

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
    private int result;
    private int count;

    public int kthSmallest(TreeNode root, int k) {
        result = 0;
        count = 0;

        dfs(root, k);

        return result;
    }

    private void dfs(TreeNode node, int k) {
        if (node == null || count >= k) return;

        dfs(node.left, k);

        count++;
        if (count == k) {
            result = node.val;
            return;
        }

        dfs(node.right, k);
    }
}
```
