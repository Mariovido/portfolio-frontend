# Palindrome Index

## Description

Given a string of lowercase letters in the range `ascii[a-z]`, this problem involves determining the index of a character that can be removed to make the string a palindrome. If the string is already a palindrome or there is no solution, return `-1`. Otherwise, return the index of a character to remove.

## Function

```java
public static int palindromeIndex(String s) {}
```

## Input Format

- The first line: an integer `q`, the number of queries &rarr; `1 <= q <= 20`.
- Each of the next `q` lines contains a query string `s` &rarr; `1 <= length of s <= 10^5 + 5`.

## Output Format

- An integer, the index of the character to remove or `-1`.

## Constraints

- `1 <= q <= 20`
- `1 <= length of s <= 10^5 + 5`
- All characters are in the range `ascii[a-z]`.

## Example

```bash
# Sample Input
3
aaab
baa
aaa

# Sample Output
3
0
-1
```
