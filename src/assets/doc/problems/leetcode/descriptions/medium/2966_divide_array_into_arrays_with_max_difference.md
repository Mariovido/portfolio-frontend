# 2966. Divide Array Into Arrays With Max Difference

## Description

Given an integer array `nums` of size `n` and a positive integer `k`, the task is to divide the array into one or more arrays of size `3`. Each element of `nums` should be in exactly one array, and the difference between any two elements in one array should be less than or equal to `k`. Return a `2D` array containing all the arrays. If it is impossible to satisfy the conditions, return an empty array. If there are multiple valid solutions, any of them can be returned.

## Function

```java
public int[][] divideArray(int[] nums, int k) {}
```

## Input Format

- A list of integers `nums` representing the array of size `n` &rarr; `1 <= n <= 10^5`, `n` is a multiple of `3`.
- An integer `k` &rarr; `1 <= k <= 10^5`.

## Output Format

- A `2D` list containing arrays that satisfy the conditions.

## Constraints

- `1 <= n <= 10^5`
- `n` is a multiple of `3`.
- `1 <= nums[i] <= 10^5`
- `1 <= k <= 10^5`

## Note

- The order of elements in the output arrays is not important.
- If multiple valid solutions exist, any of them can be returned.

## Example

```bash
# Sample Input
List<Integer> nums1 = Arrays.asList(1, 3, 4, 8, 7, 9, 3, 5, 1);
int k1 = 2;

# Sample Output
[[1, 1, 3], [3, 4, 5], [7, 8, 9]]
```
