# Grid Challenge

## Description

Given a square grid of characters, rearrange elements of each row alphabetically and determine if the columns are also in ascending alphabetical order. Return `YES` if both conditions are met, or `NO` if not.

## Function

```java
public static String gridChallenge(List<String> grid) {}
```

## Input Format

- The first line contains `t`, the number of test cases &rarr; `1 <= t <= 100`.
- For each test case:
  - The first line contains `n`, the number of rows and columns in the grid &rarr; `1 <= n <= 100`.
  - The next `n` lines contain a string of length `n`, consisting of lowercase letters.

## Output Format

- For each test case, print `YES` if it is possible to rearrange the grid alphabetically ascending in both its rows and columns, or `NO` otherwise.

## Constraints

- `1 <= t <= 100`
- `1 <= n <= 100`
- Each string consists of lowercase letters in the range `ascii[a-z]`

## Example

```bash
# Sample Input
1
5
ebacd
fghij
olmkn
trpqs
xywuv

# Sample Output
YES
```
