# Sherlock and the Valid String

## Description

Given a string, determine if it is valid according to the following conditions:

- All characters must appear the same number of times.
- It is also valid if one character can be removed at one index, and the remaining characters occur the same number of times.

## Function

```java
public static String isValid(String s) {}
```

## Input Format

- A single string `s`.

## Output Format

- Either `YES` if the string is valid, or `NO` otherwise.

## Constraints

- `1 <= |s| <= 10^5`
- Each character `s[i] &#8712; in ascii[a-z]`

## Example

```bash
# Sample Input
aabbcd

# Sample Output
NO
```
