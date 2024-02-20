# 958. Check Completeness of a Binary Tree

## Description

Given the root of a binary tree, this problem involves determining if it is a complete binary tree. In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between `1` and `2^{h}` nodes inclusive at the last level `h`.

## Function

```java
public boolean isCompleteTree(TreeNode root) {}
```

## Input Format

- The root of the binary tree.

## Output Format

- A boolean value indicating whether the binary tree is a complete binary tree.

## Constraints

- The number of nodes in the tree is in the range `[1, 100]`.
- `1 <= Node.val <= 1000`

## Example

```bash
# Sample Input
root = [1,2,3,4,5,6]

# Sample Output
true
```
