# 85. Maximal Rectangle

## Description

Given a binary matrix filled with `0`'s and `1`'s, the problem involves finding the largest rectangle containing only `1`'s and returning its area.

## Function

```java
public int maximalRectangle(char[][] matrix) {}
```

## Input Format

- The input is a binary matrix represented as a `2`D array of characters.
- Each element `matrix[i][j]` is either `0` or `1`.

## Output Format

- An integer representing the area of the largest rectangle containing only `1`'s.

## Constraints

- `rows == matrix.length`
- `cols == matrix[i].length`
- `1 <= rows, cols <= 200`

## Example

```bash
# Sample Input
matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

# Sample Output
6
```
