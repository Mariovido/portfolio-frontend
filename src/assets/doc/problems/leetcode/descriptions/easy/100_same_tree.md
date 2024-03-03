# 100. Same Tree

## Description

Given the roots of two binary trees `p` and `q`, this problem involves checking if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## Function

```java
public boolean isSameTree(TreeNode p, TreeNode q) {}
```

## Input Format

- `p` and `q` are the root nodes of the two binary trees.

## Output Format

- Returns `true` if the trees `p` and `q` are structurally identical and have the same node values; otherwise, returns `false`.

## Constraints

- The number of nodes in both trees is in the range `[0, 100]`.
- `-10^4 <= Node.val <= 10^4`

## Example

```bash
# Sample Input
p = [1,2,3], q = [1,2,3]

# Sample Output
true
```
