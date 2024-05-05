# 2441. Largest Positive Integer That Exists With Its Negative

## Description

This problem involves finding the largest positive integer `k` in an array such that its negative `−k` also exists. If no such integer exists, the function returns `-1`.

## Function

```java
public int findMaxK(int[] nums) {}
```

## Input Format

- The input consists of an integer array `nums` which does not contain any zeros.

## Output Format

- Returns the largest integer `k` for which `−k` is also present in the array. If no such `k` exists, returns `-1`.

## Constraints

- `1 <= nums.length <= 1000`
- `−1000 <= nums[i] <= 1000`
- `nums[i] != 0`

## Example

```bash
# Sample Input
[-1, 2, -3, 3]

# Sample Output
3
```
