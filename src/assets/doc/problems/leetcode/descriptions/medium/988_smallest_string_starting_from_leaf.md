# 988. Smallest String Starting From Leaf

## Description

In this problem, we need to find the smallest lexicographical string formed from a leaf node to the root of a binary tree. Each node's value corresponds to a letter from `a` to `z` based on its integer value from `0` to `25`. The challenge lies in ensuring the traversal starts from a leaf (a node with no children) and goes up to the root, comparing paths to determine the lexicographically smallest string.

## Function

```java
public String smallestFromLeaf(TreeNode root) {}
```

## Input Format

- A single input line representing the binary tree where each node's value is between `0` and `25`. Nodes are given in a level order format, where `null` signifies no child for a node.

## Output Format

- A single string output that represents the lexicographically smallest string from a leaf node to the root.

## Constraints

- `1 <= number of nodes <= 8500`
- `0 <= Node.val <= 25`

## Example

```bash
# Sample Input
root = new TreeNode(2, new TreeNode(2), new TreeNode(1, null, new TreeNode(1, new TreeNode(0, new TreeNode(0), null), null)));

# Sample Output
"abc"
```
