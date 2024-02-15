# Lily's Homework

## Description

Given an array of distinct integers, the task is to determine and return the minimum number of swaps needed to make the array beautiful. An array is considered beautiful if the sum of `|arr[i] - arr[i-1]|` among `0 < i <= n` is minimal.

## Function

```java
public static int lilysHomework(List<Integer> arr) {}
```

## Input Format

- The first line: a single integer, `n`, the number of elements in `arr`.
- The second line: `n` space-separated integers, `arr[i]`.

## Output Format

- An integer, the minimum number of swaps required.

## Constraints

- `1 <= n <= 10^5`
- `1 <= arr[i] <= 2 * 10^9`

## Example

```bash
# Sample Input
4
2 5 3 1

# Sample Output
2
```
