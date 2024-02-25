# 2709. Greatest Common Divisor Traversal

## Description

Given a `0`-indexed integer array `nums`, determine if it's possible to traverse between all pairs of indices `i` and `j` in `nums`, where `i < j`, such that `gcd(nums[i], nums[j]) > 1`, where `gcd` represents the greatest common divisor.

## Function

```java
public boolean canTraverseAllPairs(int[] nums) {}
```

## Input Format

- An integer array `nums` of length `n` (`1 <= n <= 10^5`), representing the numbers at each index.

## Output Format

- Return `true` if it is possible to traverse between all such pairs of indices, or `false` otherwise.

## Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Example

```bash
# Sample Input
int[] nums = {2, 3, 6};

# Sample Output
true
```
