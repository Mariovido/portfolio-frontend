# 1143. Longest Common Subsequence

## Description

Given two strings, `text1` and `text2`, this problem involves finding the length of their longest common subsequence. A subsequence is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

## Function

```java
public int longestCommonSubsequence(String text1, String text2) {}
```

## Input Format

- Two strings, `text1` and `text2`, where `1 <= text1.length, text2.length <= 1000`.
- Strings consist of only lowercase English characters.

## Output Format

- An integer representing the length of the longest common subsequence. If there is no common subsequence, return `0`.

## Constraints

- `1 <= text1.length, text2.length <= 1000`
- Strings consist of only lowercase English characters.

## Example

```bash
# Sample Input
String text1 = "abcde";
String text2 = "ace";

# Sample Output
3
```
