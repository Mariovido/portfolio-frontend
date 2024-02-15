# Between Two Sets

## Description

Given two arrays of integers, this problem involves finding the count of numbers that satisfy the following conditions:

1. The elements of the first array are all factors of the considered integer.
2. The considered integer is a factor of all elements of the second array.

## Function

```java
public static int getTotalX(List<Integer> a, List<Integer> b) {}
```

## Input Format

- The first line: two space-separated integers, `n` and `m`, representing the number of elements in arrays `a` and `b`.
- The second line: `n` distinct space-separated integers `a[i]` where `1 <= a[i] <= 100`.
- The third line: `m` distinct space-separated integers `b[j]` where `1 <= b[j] <= 100`.

## Output Format

- An integer, the number of integers that are between the sets.

## Constraints

- `1 <= n, m <= 10`
- `1 <= a[i], b[j] <= 100`

## Example

```bash
# Sample Input
2 3
2 4
16 32 96

# Sample Output
3
```
