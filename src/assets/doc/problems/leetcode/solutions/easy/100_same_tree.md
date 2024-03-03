# 100. Same Tree

## Intuition

The code seems to be checking whether two binary trees are identical or not. It recursively traverses both trees and checks if corresponding nodes have the same value. If any node is found to be different or if one node is `null` while the other is not, it returns `false`; otherwise, it continues the recursive comparison.

## Approach

1. Define a function `isSameTree` that takes two parameters, `p` and `q`, which represent the roots of two binary trees.
2. Check if both `p` and `q` are `null`. If they are, return `true` since they are identical.
3. Check if either `p` or `q` is `null` (but not both). If this condition is met, return `false` because the trees are not identical.
4. Check if the values of `p` and `q` are different. If they are, return `false`.
5. Recursively call the `isSameTree` function for the left subtrees of `p` and `q`.
6. Recursively call the `isSameTree` function for the right subtrees of `p` and `q`.
7. Return the logical `AND` of the results obtained from steps `5` and `6`.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree with the larger number of nodes between `p` and `q`. The function performs a depth-first traversal of both trees, visiting each node once.

- Space complexity: `O(h)`, where `h` is the height of the binary tree with the larger height between `p` and `q`. This space is used for the recursive call stack.

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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
```
