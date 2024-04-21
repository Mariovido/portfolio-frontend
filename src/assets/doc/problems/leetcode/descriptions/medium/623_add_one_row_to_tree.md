# 623. Add One Row to Tree

## Description

This problem involves adding a row of nodes with a specific value at a given depth in a binary tree. The challenge includes modifying existing tree structures, managing edge cases like adding at the root level, and preserving the original tree structure beneath the newly added row.

## Function

```java
public TreeNode addOneRow(TreeNode root, int val, int depth) {}
```

## Input Format

- `TreeNode root`: the root of the binary tree.
- `int val`: the value of the new nodes to add.
- `int depth`: the level at which the new row of nodes is to be added.

## Output Format

- The function returns the modified tree's root node.

## Constraints

- `1 <= number of nodes in the tree <= 10^4`.
- `1 <= depth of the tree <= 10^4`.
- `-100 <= Node.val <= 100`.
- `-10^5 <= val <= 10^5`.
- `1 <= depth <= depth of the tree + 1`.

## Example

```bash
# Sample Input
root = [4,2,6,3,1,5]
val = 1
depth = 2

# Sample Output
[4,1,1,2,null,null,6,3,1,5]
```
