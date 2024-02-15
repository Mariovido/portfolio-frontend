# Binary Search Tree : Lowest Common Ancestor

## Description

Given a binary search tree and two values `v1` and `v2`, the task is to return the lowest common ancestor (LCA) of `v1` and `v2` in the binary search tree.

## Function

```java
public static Node lca(Node root, int v1, int v2) {}
```

## Input Format

- The first line: an integer, `4n`, the number of nodes in the tree.
- The second line: `n` space-separated integers representing `node.data` values.
- The third line: two space-separated integers, `v1` and `v2`.

## Output Format

- Return a reference to the node that is the lowest common ancestor of `v1` and `v2`.

## Constraints

- `1 <= n, node.data <= 25`
- `1 <= v1, v2 <= 25`
- `v1 != v2`
- The tree will contain nodes with data equal to v1 and v2.

## Example

```bash
# Sample Input
6
4 2 3 1 7 6
1 7

# Sample Output
[reference to node 4]
```
