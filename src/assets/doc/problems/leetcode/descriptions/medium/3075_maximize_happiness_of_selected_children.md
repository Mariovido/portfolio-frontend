# 3075. Maximize Happiness of Selected Children

## Description

Given an array `happiness` representing the happiness values of `n` children standing in a queue, and a positive integer `k`, this problem requires selecting `k` children over `k` turns to maximize the sum of their happiness. Each selection causes the happiness of unselected children to decrease by `1`, without dropping below zero.

## Function

```java
public long maximumHappinessSum(int[] happiness, int k) {}
```

## Input Format

- The first line contains an integer `n`, the number of children &rarr; `1 <= n <= 200,000`.
- The second line contains `n` space-separated integers representing the happiness values of each child &rarr; `1 <= happiness[i] <= 100,000,000`.
- The third line contains an integer `k`, the number of selections &rarr; `1 <= k <= n`.

## Output Format

- A single integer, the maximum sum of the happiness values of the selected children.

## Constraints

- `1 <= n <= 200,000`
- `1 <= happiness[i] <= 100,000,000`
- `1 <= k <= n`

## Example

```bash
# Sample Input
3
1 2 3
2

# Sample Output
4
```
