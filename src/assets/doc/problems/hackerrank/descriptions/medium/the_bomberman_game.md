# The Bomberman Game

## Description

Bomberman lives in a rectangular grid where bombs can be planted and detonate after `3` seconds. The grid evolves in a pattern based on Bomberman's actions. Given the initial configuration of the grid, determine its state after `N` seconds.

## Function

```java
public static List<String> bomberMan(int n, List<String> grid) {}
```

## Input Format

- Three space-separated integers: `r` (number of rows), `c` (number of columns), and `n` (number of seconds to simulate).
- `r` lines, each containing a row of the matrix as a single string of c characters. `.` denotes an empty cell, and `O` denotes a bomb.

## Output Format

- An array of strings representing the grid in its final state after `n` seconds.

## Constraints

- `1 <= r, c <= 200`
- `1 <= n <= 10^9`

## Example

```bash
# Sample Input
6 7 3
.......
...O...
....O..
.......
OO.....
OO.....

# Sample Output
OOO.OOO
OO...OO
OOO...O
..OO.OO
...OOOO
...OOOO
```
