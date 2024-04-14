# 404. Sum of Left Leaves

## Intuition

The problem asks us to find the sum of all left leaves in a binary tree. A left leaf is a node which is a leaf node and the left child of its parent. To solve this problem, we can traverse the tree recursively, keeping track of whether a node is a left leaf or not.

## Approach

1. Start with a recursive function `sumOfLeftLeaves` that takes a TreeNode as input.
2. If the input node is null, return `0`.
3. Initialize a variable `sum` to store the sum of left leaves.
4. Check if the left child of the current node exists:
   - If it exists, check if it is a leaf node (i.e., both left and right children are null).
     - If it is a leaf node, add its value to `sum`.
     - If it is not a leaf node, recursively call `sumOfLeftLeaves` on its left child.
5. Recursively call `sumOfLeftLeaves` on the right child of the current node.
6. Return the final `sum` value.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree. We visit each node exactly once.

- Space complexity: `O(h)`, where `h` is the height of the binary tree. In the worst case, the space complexity approaches `O(n)` if the tree is highly unbalanced.

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
    public int sumOfLeftLeaves(TreeNode root) {
        if (root == null) return 0;

        int sum = 0;
        if (root.left != null) {
            if (root.left.left == null && root.left.right == null) sum += root.left.val;
            else sum += sumOfLeftLeaves(root.left);
        }

        sum += sumOfLeftLeaves(root.right);

        return sum;
    }
}
```
