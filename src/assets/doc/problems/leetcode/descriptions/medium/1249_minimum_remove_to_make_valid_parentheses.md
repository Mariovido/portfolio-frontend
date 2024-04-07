# 1249. Minimum Remove to Make Valid Parentheses

## Description

Given a string `s` containing parentheses (`(` and `)`) and lowercase English characters, the task is to remove the minimum number of parentheses so that the resulting string is valid. A valid string follows these rules:

- It can be empty.
- It consists only of lowercase characters.
- It can be written as `AB`, where `A` and `B` are valid strings.
- It can be written as (`A`), where `A` is a valid string.

## Function

```java
public String minRemoveToMakeValid(String s) {}
```

## Input Format

- A string `s` of length between `1` and `10^5`.

## Output Format

- A valid string obtained by removing the minimum number of parentheses.

## Constraints

- `1 <= s.length <= 10^5`
- Each character in s is either `(` , `)`, or a lowercase English letter.

## Example

```bash
# Sample Input
s = "lee(t(c)o)de)"

# Sample Output
"lee(t(c)o)de"
```
