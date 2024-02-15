# Balanced Brackets

## Description

Given a string containing various types of brackets, the task is to determine if the brackets are balanced. A bracket sequence is considered balanced if each opening bracket has a corresponding closing bracket and the pairs are properly nested.

## Function

```java
public static String isBalanced(String s) {}
```

## Input Format

- The first line: a single integer `n`, the number of strings &rarr; `1 <= n <= 10^3`.
- Each of the next `n` lines: a single string `s`, a sequence of brackets &rarr; `1 <= |s| <= 10^3`.

## Output Format

- A list of strings, either `YES` or `NO` indicating whether each sequence of brackets is balanced.

## Constraints

- `1 <= n <= 10^3`
- `1 <= |s| <= 10^3`
- All characters in the sequences belong to the set {`{`,`}`,`(`,`)`,`[`,`]`}.

## Example

```bash
# Sample Input
3
{[()]}
{[(])}
{{[[(())]]}}

# Sample Output
YES
NO
YES
```
