# 165. Compare Version Numbers

## Description

Given two version numbers, `version1` and `version2`, this problem involves comparing them based on their revisions. Version numbers consist of one or more revisions joined by a dot (`.`). Each revision consists of digits and may contain leading zeros. Revisions are compared in left-to-right order, ignoring leading zeros, and missing revisions are treated as `0`.

## Function

```java
public int compareVersion(String version1, String version2) {}
```

## Input Format

- Two strings `version1` and `version2` representing the version numbers &rarr; `1 <= version1.length, version2.length <= 500`

## Output Format

- An integer representing the comparison result:
  - If `version1 < version2`, return `-1`.
  - If `version1 > version2`, return `1`.
  - If `version1` and `version2` are equal, return `0`.

## Constraints

- `1 <= version1.length, version2.length <= 500`
- `version1` and `version2` only contain digits and `.`.
- `version1` and `version2` are valid version numbers.
- All the given revisions in `version1` and `version2` can be stored in a `32`-bit integer.

## Example

```bash
# Sample Input
version1 = "1.01", version2 = "1.001"

# Sample Output
0
```
