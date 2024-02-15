# Zig Zag Sequence

## Description

Given an array of `n` distinct integers, the goal is to transform the array into a zigzag sequence by permuting its elements. A zigzag sequence is defined as a sequence where the first `k` elements are in increasing order, and the last `k` elements are in decreasing order, where `k = (n + 1) / 2`. The task is to find the lexicographically smallest zigzag sequence for the given input array.

## Function

```java
public static void findZigZagSequence(int[] a, int n) {}
```

## Input Format

- The first line contains an integer `t`, the number of test cases.
- For each test case:
  - The first line contains an integer `n`, the number of array elements.
  - The next line contains `n` elements of array `a`.

## Output Format

- For each test case, print the elements of the transformed zigzag sequence in a single line.

## Constraints

- `1 <= t <= 20`
- `1 <= n <= 10000` (`n` is always odd)
- `1 <= a_{i} <= 10^9`

## Example

```bash
# Sample Input
2
5
2 3 5 1 4
3
6 3 1

# Sample Output
1 2 3 4 5
1 3 6
```
