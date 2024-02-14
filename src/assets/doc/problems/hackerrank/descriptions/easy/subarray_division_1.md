# Subarray Division 1

## Description

Given a chocolate bar with integers on each square, Lily wants to share a contiguous segment with Ron. The segment's length must match Ron's birth month, and the sum of the integers on the squares should equal his birth day. Determine the number of ways Lily can divide the chocolate.

## Function

```java
public static int birthday(List<Integer> s, int d, int m) {}
```

## Input Format

- The first line: an integer, `n`, the number of squares in the chocolate bar &rarr; `1 <= n <= 100`.
- The second line: `n` space-separated integers `s[i]`, the numbers on the chocolate squares where `0 <= i < n` &rarr; `1 <= s[i] <= 5`.
- The third line: two space-separated integers, `d` and `m`, Ron's birth day and his birth month &rarr; `1 <= d <= 31`, `1 <= m <= 12`.

## Output Format

- An integer, the number of ways the bar can be divided.

## Constraints

- `1 <= n <= 100`
- `0 <= i < n` &rarr; `1 <= s[i] <= 5`
- `1 <= d <= 31`
- `1 <= m <= 12`

## Example

```bash
# Sample Input
5
2 2 1 3 2
4 2

# Sample Output
2
```
