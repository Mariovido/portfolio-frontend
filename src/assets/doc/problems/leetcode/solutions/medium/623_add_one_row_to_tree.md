# 623. Add One Row to Tree

## Intuition

The problem is about adding a new row of nodes at a given `depth` depth in a binary tree with each new node having the value `val`. Initially, I considered whether recursion or iteration would be better for manipulating nodes at a specific depth. Given the need to add nodes at the exact depth, I thought about using a level-order traversal (BFS) approach, where I can easily access all nodes at the level just before the desired depth and then manipulate their children.

## Approach

1. **Edge Case**: If the depth is `1`, the new row becomes the new root. Create a new node with the value `val` and make the existing tree its left child, then return this new node as the root.
2. **Initialization**:
   - Initialize a queue to hold the nodes for BFS traversal.
   - Add the root to the queue to start the BFS.
3. **Finding the Right Level**:
   - Use BFS to traverse the tree until reaching the level just before the specified depth (`depth - 1`).
   - Incrementally traverse each level, adding child nodes to the queue.
4. **Inserting the New Row**:
   - Once the desired level (`depth - 1`) is reached, iterate over the nodes at this level.
   - For each node, create new nodes with the value `val` as both the left and right children.
   - Connect the original left child of each node to the left child of the new left node and the original right child to the right child of the new right node.
5. **Return**:
   - Return the `root` of the modified tree.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of nodes in the binary tree. This is because, in the worst case, the algorithm performs a BFS traversal of the entire tree to reach the desired depth.

- Space complexity: `O(n)`, primarily due to the storage required for the queue in the BFS, which in the worst-case holds all nodes at the largest breadth of the tree.

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
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (depth == 1) {
            TreeNode newRoot = new TreeNode(val);
            newRoot.left = root;
            return newRoot;
        }

        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.add(root);
        int currentDepth = 1;

        while (!queue.isEmpty() && currentDepth < depth - 1) {
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                TreeNode current = queue.poll();

                if (current.left != null) queue.add(current.left);
                if (current.right != null) queue.add(current.right);
            }

            currentDepth++;
        }

        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();
            TreeNode tempLeft = current.left;
            TreeNode tempRight = current.right;

            current.left = new TreeNode(val);
            current.right = new TreeNode(val);

            current.left.left = tempLeft;
            current.right.right = tempRight;
        }

        return root;
    }
}
```
