# 979. Distribute Coins in Binary Tree

## Description

Given a binary tree where each node has a certain number of coins, calculate the minimum number of moves required so that each node has exactly one coin. A move consists of transferring a coin between two adjacent nodes (either parent to child or child to parent).

## Function

```java
public int distributeCoins(TreeNode root) {}
```

## Input Format

- The root of the binary tree with `n` nodes.
- Each node contains an integer value `node.val` representing the number of coins at that node.
- There are `n` coins in total.

## Output Format

- An integer representing the minimum number of moves required to balance the coins in the tree.

## Constraints

- The number of nodes in the tree is `n`.
- `1 <= n <= 100`
- `0 <= Node.val <= n`
- The sum of all `Node.val` is `n`.

## Example

```bash
# Sample Input
root = [3, 0, 0]

# Sample Output
2
```
