# 2370. Longest Ideal Subsequence

## Description

The problem involves finding the length of the longest ideal subsequence from a given string `s` where the absolute difference in the alphabet order between any two adjacent letters is at most `k`. This challenge tests the ability to generate subsequences and check their conformity to given constraints regarding alphabetical distances.

## Function

```java
public int longestIdealString(String s, int k) {}
```

## Input Format

- The first line: a string `s` consisting of lowercase English letters.
- The second line: an integer `k`, the maximum allowed difference in alphabet order between adjacent characters in the ideal subsequence.

## Output Format

- A single integer representing the length of the longest ideal subsequence.

## Constraints

- `1 <= s.length <= 10^5`
- `0 <= k <= 25`
- `s` consists of lowercase English letters.

## Example

```bash
# Sample Input
"acfgbd"
2

# Sample Output
4
```
