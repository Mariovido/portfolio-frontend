# 552. Student Attendance Record II

## Description

Given an attendance record represented as a string where each character signifies whether a student was absent (`A`), late (`L`), or present (`P`) on that day, this problem involves determining the number of possible attendance records of length n that make a student eligible for an attendance award. A student is eligible if they have fewer than `2` days of absence (`A`) and are never late (`L`) for `3` or more consecutive days. The result should be returned modulo `10^9 + 7`.

## Function

```java
public int checkRecord(int n) {}
```

## Input Format

- An integer `n` representing the length of the attendance record.

## Output Format

- An integer representing the number of possible attendance records of length `n` that are eligible for an award, modulo `10^9 + 7`.

## Constraints

- `1 <= n <= 10^5`

## Example

```bash
# Sample Input
2

# Sample Output
8
```
