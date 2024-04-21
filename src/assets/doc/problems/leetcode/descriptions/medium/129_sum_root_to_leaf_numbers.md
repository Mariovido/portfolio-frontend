# 129. Sum Root to Leaf Numbers

## Description

Given the root of a binary tree containing digits from `0` to `9` only, each root-to-leaf path in the tree represents a number. The task is to return the total sum of all root-to-leaf numbers. Test cases are designed so that the answer will fit in a `32`-bit integer.

## Function

```java
public int sumNumbers(TreeNode root) {}
```

## Input Format

- The root of the binary tree.

## Output Format

- An integer representing the total sum of all root-to-leaf numbers.S

## Constraints

- The number of nodes in the tree is in the range `[1, 1000]`.
- `0 <= Node.val <= 9`
- The depth of the tree will not exceed `10`.

## Example

```bash
# Sample Input
root = [1,2,3]

# Sample Output
25
```
