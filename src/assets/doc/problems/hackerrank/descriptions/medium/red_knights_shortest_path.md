# Red Knight's Shortest Path

## Description

In this chess variant, the red knight can move to six different positions based on its current position: UpperLeft (UL), UpperRight (UR), Right (R), LowerRight (LR), LowerLeft (LL), and Left (L). The task is to find the shortest path from the starting position to the ending position on an `n * n` grid and print the minimum number of moves required along with the sequence of moves. Priorities for the red knight's moves are considered.

## Function

```java
public static void printShortestPath(int n, int i_start, int j_start, int i_end, int j_end) {}
```

## Input Format

- The first line: a single integer `n`, representing the grid size &rarr; `5 <= n <= 200`.
- The second line: four space-separated integers `i_{start}`, `j_{start}`, `i_{end}`, `j_{end}`, denoting the starting and ending positions `(i_{start}, j_{start})` and `(i_{end}, j_{end})` on the grid &rarr; `0 <= i_{start}, j_{start}, i_{end}, j_{end} < n`, starting and ending positions are different.

## Output Format

- If the destination can be reached, print two lines. In the first line, print a single integer denoting the minimum number of moves required. In the second line, print the space-separated sequence of moves.
- If the destination cannot be reached, print a single line containing only the word `Impossible`.

## Constraints

- `5 <= n <= 200`
- `0 <= i_{start}, j_{start}, i_{end}, j_{end} < n`
- The starting and the ending positions are different

## Example

```bash
# Sample Input
7
6 6 0 1

# Sample Output
4
UL UL UL L
```
