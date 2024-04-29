# 112. Path Sum

## Description

Given the root of a binary tree and an integer `targetSum`, this problem involves determining whether the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`. A leaf is a node with no children.

## Function

```java
public boolean hasPathSum(TreeNode root, int targetSum) {}
```

## Input Format

- The `root` of the binary tree.
- An integer `targetSum`.

## Output Format

- A boolean value indicating whether a root-to-leaf path with the target sum exists.

## Constraints

- The number of nodes in the tree is in the range `[0, 5000]`.
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

## Example

```bash
# Sample Input
root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

# Sample Output
true
```
