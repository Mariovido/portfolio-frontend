# Sherlock and Array

## Description

Given an array of integers, the problem is to find an element such that the sum of all elements to its left is equal to the sum of all elements to its right.

## Function

```java
public static String balancedSums(List<Integer> arr) {}
```

## Input Format

- The first line: an integer, `T`, the number of test cases.
- The next `T` pairs of lines each represent a test case.
  - The first line of each test case contains `n`, the number of elements in the array `arr`.
  - The second line of each test case contains `n` space-separated integers `arr[i]` where `0 <= i < n`.

## Output Format

- String: either `YES` or `NO`.

## Constraints

- `1 <= T <= 10`
- `1 <= n <= 10^5`
- `1 <= arr[i] <= 2 * 10^4`
- `0 <= i < n`

## Example

```bash
# Sample Input
2
3
1 2 3
4
1 2 3 3

# Sample Output
NO
YES
```
