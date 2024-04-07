# 205. Isomorphic Strings

## Description

Given two strings `s` and `t`, this problem involves determining if they are isomorphic. Two strings are considered isomorphic if the characters in `s` can be replaced to get `t`. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

## Function

```java
public boolean isIsomorphic(String s, String t) {}
```

## Input Format

- Two strings `s` and `t`, where `1 <= s.length <= 5 * 10^4` and `t.length == s.length`.
- Both `s` and `t` consist of any valid ASCII character.

## Output Format

- A boolean value indicating whether `s` and `t` are isomorphic (`true` if they are isomorphic, `false` otherwise).

## Constraints

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ASCII character.

## Example

```bash
# Sample Input
s = "egg", t = "add"

# Sample Output
true
```
