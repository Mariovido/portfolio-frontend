# 786. K-th Smallest Prime Fraction

## Description

Given a sorted array of integers consisting of the number `1` and unique prime numbers, and an integer `k`, the task is to find the kth smallest fraction that can be formed from every possible pair of array elements where the numerator is less than the denominator.

## Function

```java
public int[] kthSmallestPrimeFraction(int[] arr, int k) {}
```

## Input Format

- The first line: an integer, `n`, representing the size of the array &rarr; `2 <= n <= 1000`.
- The second line: `n` space-separated integers, sorted in strictly increasing order, containing the number `1` and prime numbers &rarr; `1 <= arr[i] <= 30000`.
- The third line: an integer `k` &rarr; `1 <= k <= arr.length * (arr.length - 1) / 2`.

## Output Format

- An array of two integers, `[arr[i], arr[j]]`, representing the kth smallest fraction.

## Constraints

- `arr.length` ranges from `2` to `1000`.
- All elements in `arr` are unique, where `arr[0`] is always `1`, and the rest are prime numbers sorted in increasing order.
- `k` is a valid index based on the number of possible unique fractions.

## Example

```bash
# Sample Input
int[] arr = {1, 2, 3, 5};
int k = 3;

# Sample Output
[2, 5]
```