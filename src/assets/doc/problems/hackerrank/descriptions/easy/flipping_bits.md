# Flipping Bits

## Description

Given a list of `32-bit` unsigned integers, this problem involves flipping all the bits (changing `1`s to `0`s and `0`s to `1`s) and returning the result as an unsigned integer.

## Function

```java
public static long flippingBits(long n) {}
```

## Input Format

- The first line of the input contains `q`, the number of queries.
- Each of the next `q` lines contains an integer, `n`, to process &rarr; `0 <= n < 2^32`.

## Output Format

- An integer, the unsigned decimal integer result.

## Constraints

- `1 <= q <= 100`
- `0 <= n < 2^32`

## Example

```bash
# Sample Input
3
2147483647
1
0

# Sample Output
2147483648
4294967294
4294967295
```
