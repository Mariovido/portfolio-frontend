# 1463. Cherry Pickup II

## Description

Given a grid representing a field of cherries, with two robots located at the top-left and top-right corners, respectively, this problem involves determining the maximum number of cherries that can be collected using both robots while following specific movement rules.

## Function

```java
public int cherryPickup(int[][] grid) {}
```

## Input Format

- A 2D array `grid` representing the field of cherries, where `grid[i][j]` represents the number of cherries at cell `(i, j)`.
- The number of rows `rows` and columns `cols` in the grid, where `rows == grid.length` and `cols == grid[i].length`.

## Output Format

- An integer representing the maximum number of cherries that can be collected using both robots.

## Constraints

- `2 <= rows, cols <= 70`
- `0 <= grid[i][j] <= 100`

## Follow-up:

Consider finding an algorithm that runs in `O(m + n)` time complexity.

## Example

```bash
# Sample Input
[[3,1,1],[2,5,1],[1,5,5],[2,1,1]]

# Sample Output
24
```
