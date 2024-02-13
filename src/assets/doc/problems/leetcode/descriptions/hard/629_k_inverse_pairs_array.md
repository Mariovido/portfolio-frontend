# 629. K Inverse Pairs Array

## Description

Given an integer array `nums`, an inverse pair is a pair of integers `[i, j]` where `0 <= i < j < nums.length` and `nums[i] > nums[j]`. The task is to return the number of different arrays consisting of numbers from `1` to `n` such that there are exactly `k` inverse pairs. The answer should be returned modulo `10^9 + 7`.

## Function

```java
public int kInversePairs(int n, int k) {}
```

## Input Format

- Two integers, `n` and `k` (`1 <= n <= 1000`, `0 <= k <= 1000`).

## Output Format

- An integer representing the number of different arrays with exactly `k` inverse pairs, modulo `10^9 + 7`.

## Constraints

- `1 <= n <= 1000`
- `0 <= k <= 1000`

## Example

```bash
# Sample Input
n = 3, k = 0

# Sample Output
1
```
