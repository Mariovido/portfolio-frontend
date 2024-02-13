# 230. Kth Smallest Element in a BST

## Description

Given the root of a `Binary Search Tree (BST)` and an integer `k`, this problem involves finding and returning the `k^{th}` smallest value (`1`-indexed) among all the values of the nodes in the tree.

## Function

```java
public int kthSmallest(TreeNode root, int k) {}
```

## Input Format

- `root`: The root of the binary search tree.
- `k`: The target position of the smallest element (`1 <= k <= n`, where `n` is the number of nodes in the tree).

## Output Format

- An integer representing the `k^{th}` smallest value in the `BST`.

## Constraints

- The number of nodes in the tree is `n` &rarr; `1 <= n <= 10^4`
- `1 <= k <= n`
- `0 <= Node.val <= 10^4`

## Example

```bash
# Sample Input
TreeNode root = [3,1,4,null,2];
int k = 1;

# Sample Output
1
```
