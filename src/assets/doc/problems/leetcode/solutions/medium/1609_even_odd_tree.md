# 1609. Even Odd Tree

## Intuition

The code aims to determine whether a given binary tree is an "even-odd" tree or not. An even-odd tree is a binary tree where at every level, the values of the nodes satisfy certain conditions. Specifically, on every even level, the values of the nodes should be strictly increasing and odd, while on every odd level, the values should be strictly decreasing and even.

## Approach

1. Initialize a `queue` to perform level order traversal of the binary tree.
2. Start with the `root` node and mark the level as even.
3. Iterate through the levels of the tree using a while loop until the `queue` is empty.
4. For each level:
   - Track the previous value in the level to ensure the conditions are met.
   - Check if the current level follows the even-odd pattern:
     - For even levels, values should be strictly increasing and odd.
     - For odd levels, values should be strictly decreasing and even.
   - Enqueue the child nodes of the current node if they exist.
   - Toggle the level flag to switch between even and odd levels.
5. If the conditions are met for all levels, return `true` indicating the tree is an even-odd tree; otherwise, return `false`.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree. We traverse each node once.

- Space complexity: `O(n)`, where `n` is the maximum number of nodes at any level in the binary tree. In the worst case, the queue can contain all the nodes at the lowest level of the tree.

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
    public boolean isEvenOddTree(TreeNode root) {
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.offer(root);
        boolean evenLevel = true;

        while (!queue.isEmpty()) {
            int size = queue.size();
            Integer prevVal = evenLevel ? Integer.MIN_VALUE : Integer.MAX_VALUE;

            for (int i = 0; i < size; i++) {
                TreeNode currNode = queue.poll();
                int value = currNode.val;

                if (evenLevel && (value % 2 == 0 || value <= prevVal)) return false;
                else if (!evenLevel && (value % 2 != 0 || value >= prevVal)) return false;

                prevVal = value;

                if (currNode.left != null) queue.offer(currNode.left);
                if (currNode.right != null) queue.offer(currNode.right);
            }

            evenLevel = !evenLevel;
        }

        return true;
    }
}
```
