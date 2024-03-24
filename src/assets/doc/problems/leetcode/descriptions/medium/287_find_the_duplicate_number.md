# 287. Find the Duplicate Number

## Description

This problem focuses on finding the single duplicate number in an array `nums` containing `n + 1` integers, each in the range `[1, n]` inclusive. The challenge is to identify the repeated number under the constraints of not modifying the array and using only constant extra space.

## Function

```java
public int findDuplicate(int[] nums) {}
```

## Input Format

- An array `nums` containing `n + 1` integers, where each integer is between `1` and `n` (inclusive).

## Output Format

- Return the duplicate number found in the array.

## Constraints

- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- Each integer appears only once except for precisely one integer which appears two or more times.

## Example

```bash
# Sample Input
nums = [1,3,4,2,2]

# Sample Output
2
```
