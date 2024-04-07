# 678. Valid Parenthesis String

## Description

This problem evaluates if a string containing `(`, `)`, and `''` is valid based on specific rules. The `''` character can represent either parenthesis or an empty string, adding flexibility to the validation process.

## Function

```java
public boolean checkValidString(String s) {}
```

## Input Format

- A single string s consisting of characters `(`, `)`, and `*`.

## Output Format

- Returns `true` if the string is valid, otherwise returns `false`.

## Constraints

- `1 <= s.length <= 100`
- `s[i]` is `(`, `)`, or `*`.

## Example

```bash
# Sample Input
s = "()"

# Sample Output
true
```
