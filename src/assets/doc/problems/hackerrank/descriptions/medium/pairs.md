# Pairs

## Description

Given an array of integers and a target value, this problem involves determining the number of pairs of array elements that have a difference equal to the target value.

## Function

```java
public static int pairs(int k, List<Integer> arr) {}
```

## Input Format

- The first line: two space-separated integers `n` and `k`, representing the size of `arr` and the target value.
- The second line: space-separated integers of the array `arr`.

## Output Format

- An integer, the number of pairs that satisfy the criterion.

## Constraints

- `2 <= n <= 10^5`
- `0 < k < 10^9`
- `0 < arr[i] < 2^{31-1}`
- Each integer `arr[i]` will be unique.

## Example

```bash
# Sample Input
5 2
1 5 3 4 2

# Sample Output
3
```
