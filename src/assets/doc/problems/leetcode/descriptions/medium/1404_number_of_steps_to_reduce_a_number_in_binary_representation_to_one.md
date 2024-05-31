# 1404. Number of Steps to Reduce a Number in Binary Representation to One

## Description

Given the binary representation of an integer as a string, this problem involves calculating the number of steps to reduce the integer to `1`. The steps are defined as:

- If the number is even, divide it by `2`.
- If the number is odd, add `1` to it.

## Function

```java
public int numSteps(String s) {}
```

## Input Format

- A binary string `s` of length `1` to `500`.

## Output Format

- The number of steps taken to reduce the integer to `1`.

## Constraints

- The string consists of characters `0` or `1`.
- The first character of the string is `1`.

## Example

```bash
# Sample Input
"1101"

# Sample Output
6
```
