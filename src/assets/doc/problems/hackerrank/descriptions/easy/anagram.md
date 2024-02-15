# Anagram

## Description

Given a string, the problem involves splitting it into two contiguous substrings of equal length and determining the minimum number of characters to change to make the two substrings into anagrams of one another.

## Function

```java
public static int anagram(String s) {}
```

## Input Format

- The first line: an integer, `q`, the number of test cases &rarr; `1 <= q <= 100`.
- Each test case: a string `s` (`1 <= |s| <= 10^4`) consisting only of characters in the range `ascii[a-z]`.

## Output Format

- An integer representing the minimum number of characters to change or `-1`.

## Constraints

- `1 <= q <= 100`
- `1 <= |s| <= 10^4`

## Example

```bash
# Sample Input
6
aaabbb
ab
abc
mnop
xyyx
xaxbbbxx

# Sample Output
3
1
-1
2
0
1
```
