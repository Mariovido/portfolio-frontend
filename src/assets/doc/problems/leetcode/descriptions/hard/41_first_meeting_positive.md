# 41. First Missing Positive

## Description

Given an unsorted integer array `nums`, the task is to return the smallest positive integer that is not present in `nums`. The algorithm must run in linear time complexity `O(n)` and use constant auxiliary space `O(1)`.

## Function

```java
public int firstMissingPositive(int[] nums) {}
```

## Input Format

- An unsorted integer array `nums` of length `n` &rarr; `1 <= n <= 10^5`.
- Each element `nums[i]` is within the range `[-2^{31}, 2^{31} - 1]`.

## Output Format

- An integer representing the smallest missing positive integer.

## Constraints

- `1 <= n <= 10^5`
- `-2^{31} <= nums[i] <= 2^{31} - 1`

## Example

```bash
# Sample Input
nums = [1,2,0]

# Sample Output
3
```
