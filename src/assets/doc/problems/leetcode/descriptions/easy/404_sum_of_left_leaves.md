# 404. Sum of Left Leaves

## Description

This problem requires calculating the sum of all left leaves in a given binary tree. A left leaf is defined as a leaf (a node without children) that is also the left child of its parent node.

## Function

```java
public int sumOfLeftLeaves(TreeNode root) {}
```

## Input Format

- A single input line that contains the serialized form of a binary tree, represented as a list of integers where `null` indicates a missing node.

## Output Format

- A single integer representing the sum of the values of all left leaves in the binary tree.

## Constraints

- The number of nodes in the tree is between `1` and `1000`.
- Node values range from `-1000` to `1000`.

## Example

```bash
# Sample Input
root = [3,9,20,null,null,15,7]

# Sample Output
24
```
