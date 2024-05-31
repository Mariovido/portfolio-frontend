# 1442. Count Triplets That Can Form Two Arrays of Equal XOR

## Description

Given an array of integers, this problem involves finding and counting the number of triplets `(i, j, k`) such that the `XOR` of the elements in two contiguous subarrays is equal. Specifically, for indices `i, j, k` where `0 <= i < j <= k < arr.length`, the subarrays are defined as follows:

- `a = arr[i] &oplus; arr[i + 1] &oplus; ... &oplus; arr[j - 1]`
- `b = arr[j] &oplus; arr[j + 1] &oplus; ... &oplus; arr[k]`

## Function

```java
public int countTriplets(int[] arr) {}
```

## Input Format

- An integer array `arr` with length `1 <= arr.length <= 300` and elements `1 <= arr[i] <= 10^8`.

## Output Format

- An integer representing the number of triplets `(i, j, k)` where `a == b`.

## Constraints

- `1 <= arr.length <= 300`
- `1 <= arr[i] <= 10^8`

## Example

```bash
# Sample Input
arr = [2, 3, 1, 6, 7]

# Sample Output
4
```
