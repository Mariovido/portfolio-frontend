# 20. Valid Parentheses

## Description

Given a string containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, this problem involves determining if the input string is valid according to the following criteria:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Function

```java
public boolean isValid(String s) {}
```

## Input Format

- A string `s` containing parentheses.

## Output Format

- A boolean value indicating whether the input string is valid or not.

## Constraints

- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `()[]{}`.

## Example

```bash
# Sample Input
s = "()"

# Sample Output
true
```
