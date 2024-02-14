# Array Manipulation

## Description

Given a `1`-indexed array of zeros and a list of operations, this problem involves adding values to each array element between two given indices, inclusive. After all operations are performed, the goal is to return the maximum value in the array.

## Function

```java
public static long arrayManipulation(int n, List<List<Integer>> queries) {}
```

## Input Format

- The first line: two space-separated integers `n` and `m`, the size of the array and the number of operations.
- Each of the next `m` lines contains three space-separated integers `a`, `b`, and `k`, representing the left index, right index, and summand.

## Output Format

- An integer, the maximum value in the resultant array.

## Constraints

- `3 <= n <= 10^7`
- `1 <= m <= 2 * 10^5`
- `1 <= a <= b <= n`
- `0 <= k <= 10^9`

## Example

```bash
# Sample Input
5 3
1 2 100
2 5 100
3 4 100

# Sample Output
200
```
