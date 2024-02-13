# 1. Two Sum

## Description

Given an array of integers `nums` and an integer `target`, find and return the indices of two numbers in the array such that they add up to the target. You may assume that each input has exactly one solution, and you cannot use the same element twice. The order of the indices in the output does not matter.

## Function

```java
public int[] twoSum(int[] nums, int target) {}
```

## Input Format

- An array of integers nums with length `2` to `10.000` &rarr; `2 <= nums.length <= 10.000`.
- An integer target &rarr; `-10^9 <= target <= 10^9`.

## Output Format

- An array of two integers representing the indices of the two numbers that add up to the target.

## Constraints

- `2 <= nums.length <= 10.000`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Follow-up

- Can you come up with an algorithm that is less than `O(n^2)` time complexity?

## Example

```bash
# Sample Input
int[] nums1 = {2, 7, 11, 15};
int target1 = 9;

# Sample Output
[0, 1]
```
