# 76. Minimum Window Substring

## Description

Given two strings `s` and `t` of lengths `m` and `n` respectively, find and return the minimum window substring of `s` that contains every character in `t` (including duplicates).

## Function

```java
public String minWindow(String s, String t) {}
```

## Input Format

- Two strings, `s` and `t`, representing the input strings.

## Output Format

- A string representing the minimum window substring or an empty string if no such substring exists.

## Constraints

- `1 <= m, n <= 105` where `m` and `n` are the lengths of `s` and `t` respectively.

## Follow-up:

Consider finding an algorithm that runs in `O(m + n)` time complexity.

## Example

```bash
# Sample Input
s = "ADOBECODEBANC", t = "ABC"

# Sample Output
"BANC"
```
