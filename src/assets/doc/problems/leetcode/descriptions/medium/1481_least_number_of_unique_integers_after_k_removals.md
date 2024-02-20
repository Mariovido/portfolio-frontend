# 1481. Least Number of Unique Integers after K Removals

## Description

Given an array of integers `arr` and an integer `k`, the problem involves finding the least number of unique integers remaining in the array after exactly `k` elements are removed.

## Function

```java
public int findLeastNumOfUniqueInts(int[] arr, int k) {}
```

## Input Format

- The first line: an integer, `n`, representing the size of the array &rarr; `1 <= n <= 10^5`.
- The second line: `n` space-separated integers, `arr[i]` &rarr; `1 <= arr[i] <= 10^9`.
- The third line: an integer `k`, representing the number of elements to be removed &rarr; `0 <= k <= n`.

## Output Format

- An integer representing the least number of unique integers remaining after removing exactly `k` elements.

## Constraints

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^9`
- `0 <= k <= arr.length`

## Example

```bash
# Sample Input
arr = [5,5,4], k = 1

# Sample Output
1
```
