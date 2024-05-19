# 1325. Delete Leaves With a Given Value

## Description

Given a binary tree `root` and an integer `target`, this problem involves deleting all the leaf nodes with the value `target`. The process continues recursively: if deleting a leaf node causes its parent to become a leaf node with the value `target`, then the parent node should also be deleted. This continues until no such leaf nodes can be deleted.

## Function

```java
public TreeNode removeLeafNodes(TreeNode root, int target) {}
```

## Input Format

- `root`: The root node of the binary tree.
- `target`: An integer value that needs to be matched for deletion of leaf nodes.

## Output Format

- The root of the modified tree after deletion of all qualifying leaf nodes.

## Constraints

- The number of nodes in the tree is in the range `[1, 3000]`.
- `1 <= Node.val, target <= 1000`.

## Example

```bash
# Sample Input
root = [1, 2, 3, 2, null, 2, 4], target = 2

# Sample Output
[1, null, 3, null, 4]
```
