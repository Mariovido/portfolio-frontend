# Sherlock and Anagrams

## Description

Given a string, this problem involves finding the number of pairs of substrings that are anagrams of each other.

## Function

```java
public static int sherlockAndAnagrams(String s) {}
```

## Input Format

- The first line: an integer, `q`, the number of queries &rarr; `1 <= q <= 10`.
- Each of the next `q` lines: a string `s` to analyze &rarr; `2 <= length of s <= 100`.

## Output Format

- An integer representing the number of unordered anagrammatic pairs of substrings in `s`.

## Constraints

- `1 <= q <= 10`
- `2 <= length of s <= 100`
- `s` contains only lowercase letters in the range `ascii[a-z]`.

## Example

```bash
# Sample Input
2
abba
abcd

# Sample Output
4
0
```
