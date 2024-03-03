# 513. Find Bottom Left Tree Value

## Intuition

The problem requires finding the leftmost value in the bottom row of a binary tree. One approach could be to perform a level-order traversal (BFS) starting from the root node, keeping track of the leftmost node at each level until reaching the last level. The last leftmost node encountered will be the answer.

## Approach

1. Initialize a `queue` to perform a level-order traversal.
2. Enqueue the `root` node.
3. While the `queue` is not empty:
   - Dequeue a node.
   - If the dequeued node has a right child, enqueue the right child.
   - If the dequeued node has a left child, enqueue the left child.
4. Return the value of the last dequeued node, which will be the leftmost node in the bottom row of the tree.

## Complexity

- Time complexity: `O(n)`

  - In the worst-case scenario, where all nodes need to be traversed, the time complexity is `O(n)`, where n is the number of nodes in the tree.

- Space complexity: `O(n)`
  - `O(w)`, where w is the maximum width of the tree (the number of nodes in the bottom row).
  - In the worst-case scenario, the entire bottom row needs to be stored in the queue, so the space complexity can be considered `O(n)`.

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
    public int findBottomLeftValue(TreeNode root) {
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);

        while(!queue.isEmpty()) {
            root = queue.poll();
            if (root.right != null) queue.add(root.right);
            if (root.left != null) queue.add(root.left);
        }

        return root.val;
    }
}
```
