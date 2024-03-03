# 1609. Even Odd Tree

## Description

This problem checks if a binary tree adheres to specific even-odd rules based on node values and their levels. An Even-Odd binary tree must have odd values in strictly increasing order on even-indexed levels and even values in strictly decreasing order on odd-indexed levels.

## Function

```java
public boolean isEvenOddTree(TreeNode root) {}
```

## Input Format

- A binary tree where `root` is the root of the binary tree.

## Output Format

- Returns `true` if the binary tree is Even-Odd according to the given rules; otherwise, returns `false`.

## Constraints

- The number of nodes in the tree is in the range `[1, 10^5]`.
- `1 <= Node.val <= 10^6`.

## Example

```bash
# Sample Input
root = [1,10,4,3,null,7,9,12,8,6,null,null,2]

# Sample Output
true
```
