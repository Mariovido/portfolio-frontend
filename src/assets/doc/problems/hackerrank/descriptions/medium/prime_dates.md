# Prime Dates

## Description

In this challenge, the task is to debug the existing code to successfully execute and find the number of lucky dates between two given dates (inclusive). A lucky date is defined as a date where the sequentially concatenated day, month, and year, without leading zeroes, is divisible by either `4` or `7`. The provided function `findPrimeDates` needs debugging to correctly identify lucky dates.

## Function

```java
public static int findPrimeDates(int d1, int m1, int y1, int d2, int m2, int y2) {}
```

## Input Format

- The only line of input contains two strings `u` and `v` denoting two dates in the format `dd-mm-yyyy`.

## Output Format

- For each test case, print a single integer: the number of lucky dates between `u` and `v` in a single line.

## Constraints

- `1 <= d1, d2 <= 31`
- `1 <= m1, m2 <= 12`
- `1000 <= y1 <= y2 <= 9999`

## Example

```bash
# Sample Input
02-08-2024" "05-08-2024

# Sample Output
3
```
