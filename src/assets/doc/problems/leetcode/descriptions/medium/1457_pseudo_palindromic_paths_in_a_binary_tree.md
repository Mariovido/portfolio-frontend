# 1457. Pseudo-Palindromic Paths in a Binary Tree

## Description

Given a binary tree where node values are digits from `1` to `9`, determine the number of pseudo-palindromic paths from the root node to leaf nodes. A path is considered pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

## Function

```java
public int pseudoPalindromicPaths (TreeNode root) {}
```

## Input Format

- The root of a binary tree where each node contains a digit from `1` to `9`.

## Output Format

- An integer representing the number of pseudo-palindromic paths from the root node to leaf nodes.

## Constraints

- The number of nodes in the tree is in the range `[1, 105]`.
- `1 <= Node.val <= 9`

## Example

```bash
# Sample Input
TreeNode root1 = new TreeNode(2, new TreeNode(3, new TreeNode(3), new TreeNode(1)), new TreeNode(1, null, new TreeNode(1)));

# Sample Output
2
```
