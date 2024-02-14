# Jesse and Cookies

## Description

Jesse wants to make cookies with sweetness greater than or equal to a threshold value, `k`. The process involves combining the least sweet cookies until the threshold is met. Determine the minimum number of operations needed, or return `-1` if not possible.

## Function

```java
public static int cookies(int k, List<Integer> A) {}
```

## Input Format

- The first line: two space-separated integers, `n` (size of `A`) and `k` (minimum required sweetness).
- The second line: `n` space-separated integers, `A[i]` (sweetness values).

## Output Format

- An integer, the number of iterations required, or `-1` if not possible.

## Constraints

- `1 <= n <= 10^6`
- `0 <= k <= 10^9`
- `0 <= A[i] <= 10^6`

## Example

```bash
# Sample Input
6 7
1 2 3 9 10 12

# Sample Output
2
```
