# 2864. Maximum Odd Binary Number

## Description

Given a binary string `s` with at least one `1`, the task is to rearrange its bits to form the maximum possible odd binary number. The rearrangement should ensure that the resulting binary number is odd and as large as possible, even if it includes leading zeros.

## Function

```java
public String maximumOddBinaryNumber(String s) {}
```

## Input Format

- A single line input, a binary string `s` with a length of `1 <= s.length <= 100`, consisting only of `0`s and `1`s, and containing at least one `1`.

## Output Format

- A string representing the maximum odd binary number achievable through rearrangement.

## Constraints

- `1 <= s.length <= 100`
- `s` consists only of `0` and `1`.
- `s` contains at least one `1`.

## Example

```bash
# Sample Input
s = "010"

# Sample Output
"001"
```
