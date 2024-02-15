# Recursive Digit Sum

## Description

Given a string representation of an integer `n` and an integer `k`, the problem involves finding the super digit of the number created by concatenating the string `n` `k` times. The super digit of a number is calculated recursively: if the number has only one digit, the super digit is the number itself; otherwise, the super digit is the super digit of the sum of its digits.

## Function

```java
public static int superDigit(String n, int k) {}
```

## Input Format

- The first line contains two space-separated integers, `n` and `k`.

## Output Format

- The super digit of `n` repeated `k` times.

## Constraints

- `1 <= n < 10^1000000`
- `1 <= k <= 10^5`

## Example

```bash
# Sample Input
9875 4

# Sample Output
8
```
