# 1208. Get Equal Substrings Within Budget

## Description

Given two strings `s` and `t` of the same length, and an integer `maxCost`, this problem involves finding the maximum length of a substring in `s` that can be transformed into the corresponding substring in `t` with a total transformation cost less than or equal to `maxCost`. The transformation cost for changing the `i^{th}` character of `s` to the ith character of `t` is the absolute difference between their ASCII values.

## Function

```java
public int equalSubstring(String s, String t, int maxCost) {}
```

## Input Format

- The strings `s` and `t` (both of length `n`)
- An integer `maxCost`

## Output Format

- Return an integer representing the maximum length of the substring of `s` that can be changed to `t` within the given `maxCost`.

## Constraints

- `1 <= s.length <= 10^5`
- `t.length == s.length`
- `0 <= maxCost <= 10^6`
- `s` and `t` consist of only lowercase English letters.

## Example

```bash
# Sample Input
s = "abcd", t = "bcdf", maxCost = 3

# Sample Output
3
```
