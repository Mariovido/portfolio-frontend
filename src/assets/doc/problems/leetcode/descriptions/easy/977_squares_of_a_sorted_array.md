# 977. Squares of a Sorted Array

## Description

Given an integer array `nums` sorted in non-decreasing order, this problem involves returning an array of the squares of each number sorted in non-decreasing order.

## Function

```java
public int[] sortedSquares(int[] nums) {}
```

## Input Format

- An integer array `nums` sorted in non-decreasing order with `1 <= nums.length <= 10^4`.

## Output Format

- An array of integers representing the squares of each number in `nums` sorted in non-decreasing order.

## Constraints

- `1 <= nums.length <= 10^4`
- `10^4 <= nums[i] <= 10^4`
- `nums` is sorted in non-decreasing order.

## Follow-up

Squaring each element and sorting the new array is trivial. An `O(n)` solution can be achieved using a different approach.

## Example

```bash
# Sample Input
nums = [-4,-1,0,3,10]

# Sample Output
[0,1,9,16,100]
```
