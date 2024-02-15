# Castle on the Grid

## Description

Given a square grid with open `.` and blocked `X` cells, determine the minimum number of moves from the starting position to the goal. The playing piece can move along any row or column until it reaches the grid's edge or a blocked cell.

## Function

```java
public static int minimumMoves(List<String> grid, int startX, int startY, int goalX, int goalY) {}
```

## Input Format

- The first line: an integer `n`, the size of the grid.
- Each of the next `n` lines: a string of length `n` representing rows of the grid.
- The last line: four space-separated integers, `startX`, `startY`, `goalX`, `goalY`.

## Output Format

- An integer, the minimum moves to reach the goal.

## Constraints

- `1 <= n <= 100`
- `0 <= startX, startY, goalX, goalY < n`

## Example

```bash
# Sample Input
3
.X.
.X.
...
0 0 0 2

# Sample Output
3
```
