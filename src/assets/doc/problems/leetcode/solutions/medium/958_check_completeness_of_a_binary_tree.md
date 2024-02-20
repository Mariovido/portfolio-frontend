# 958. Check Completeness of a Binary Tree

## Intuition

The problem seems to be checking whether a binary tree is complete or not. A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

## Approach

To solve this problem, we can utilize a breadth-first search (BFS) traversal approach. We'll use a `queue` to perform level order traversal. At each level, we'll enqueue the left and right children of each node. If we encounter a `null` node, we mark it and continue the traversal. Once we have encountered a `null` node, any non-null node thereafter would violate the completeness property.

## Complexity

- Time complexity: `O(n)` - We traverse through all the nodes of the binary tree once.

- Space complexity: `O(n)` - In the worst case, the queue can contain all nodes of the last level of the binary tree.

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
    public boolean isCompleteTree(TreeNode root) {
        if (root == null) return true;

        Deque<TreeNode> queue = new LinkedList<>();

        queue.offer(root);
        boolean reachedNull = false;

        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();

            if (current == null) {
                reachedNull = true;
                continue;
            }

            if (reachedNull) return false;

            queue.offer(current.left);
            queue.offer(current.right);
        }

        return true;
    }
}
```
