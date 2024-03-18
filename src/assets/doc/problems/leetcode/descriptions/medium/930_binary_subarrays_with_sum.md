# 930. Binary Subarrays With Sum

## Description

Given a binary array `nums` and an integer `goal`, this problem involves counting the number of non-empty subarrays with a sum equal to the `goal`. A subarray is a contiguous part of the array.

## Function

```java
public int numSubarraysWithSum(int[] nums, int goal) {}
```

## Input Format

- The array `nums`: an array of binary integers (`0` or `1`).
- The integer `goal`: the target sum.

## Output Format

- An integer representing the number of non-empty subarrays with the sum equal to `goal`.

## Constraints

- `1 <= nums.length <= 3 * 10^4`
- `nums[i]` is either `0` or `1`.
- `0 <= goal <= nums.length`

## Example

```bash
# Sample Input
nums = [1,0,1,0,1], goal = 2

# Sample Output
4
```
