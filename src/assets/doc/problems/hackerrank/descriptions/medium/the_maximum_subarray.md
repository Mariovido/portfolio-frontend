# The Maximum Subarray

## Description

Given an array, find the maximum possible sum among all nonempty subarrays and all nonempty subsequences. Print the two values as space-separated integers on one line.

## Function

```java
public static List<Integer> maxSubarray(List<Integer> arr) {}
```

## Input Format

- The first line of input contains a single integer `t`, the number of test cases.
- For each test case:
  - The first line contains a single integer `n`, the size of the array.
  - The second line contains `n` space-separated integers `arr[i]` where `0 <= i < n`.

## Output Format

- An array of two integers: the maximum subarray and subsequence sums.

## Constraints

- `1 <= t <= 10`
- `1 <= n <= 10^5`
- `-10^4 <= arr[i] <= 10^4`
- The subarray and subsequences considered should have at least one element.

## Example

```bash
# Sample Input
2
4
1 2 3 4
6
2 -1 2 3 4 -5

# Sample Output
10 10
10 11
```
