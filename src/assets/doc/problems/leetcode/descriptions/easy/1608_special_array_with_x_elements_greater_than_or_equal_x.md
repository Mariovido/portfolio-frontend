# 1608. Special Array With X Elements Greater Than or Equal X

## Description

Given an array of non-negative integers, determine if the array is special. An array is special if there exists a number `x` such that there are exactly `x` numbers in the array that are greater than or equal to `x`. If the array is special, return `x`; otherwise, return `-1`. The value of `x` is guaranteed to be unique if it exists.

## Function

```java
public int specialArray(int[] nums) {}
```

## Input Format

- An integer array `nums` with the length of `1 <= nums.length <= 100`.
- Each element `nums[i]` is a non-negative integer where `0 <= nums[i] <= 1000`.

## Output Format

- Return the integer `x` if the array is special, otherwise return `-1`.

## Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Example

```bash
# Sample Input
nums = [3, 5]

# Sample Output
2
```
