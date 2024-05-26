# 1863. Sum of All Subset XOR Totals

## Description

Given an array of integers, this problem involves calculating the sum of all `XOR` totals for every subset of the array. Each subset's `XOR` total is the bitwise `XOR` of its elements, and the result is the sum of these totals. Precision issues are not a concern here.

## Function

```java
public int subsetXORSum(int[] nums) {}
```

## Input Format

- The first line: an integer `n`, representing the size of the array `nums` &rarr; `1 <= n <= 12`.
- The second line: `n` space-separated integers &rarr; `1 <= nums[i] <= 20`.

## Output Format

- A single integer representing the sum of all `XOR` totals for every subset of the array.

## Constraints

- `1 <= nums.length <= 12`
- `1 <= nums[i] <= 20`

## Example

```bash
# Sample Input
2
1 3

# Sample Output
6
```
