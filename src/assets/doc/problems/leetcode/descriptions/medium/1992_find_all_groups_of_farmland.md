# 1992. Find All Groups of Farmland

## Description

Given a binary matrix representing forested land and farmland, this problem involves identifying groups of farmland and returning the coordinates of their top left and bottom right corners. Groups are rectangular and not adjacent to each other.

## Function

```java
public int[][] findFarmland(int[][] land) {}
```

## Input Format

- A `2`D array `land` representing forested land and farmland.
- Each element `land[i][j]` is either `0` (forested land) or `1` (farmland).

## Output Format

- A `2`D array containing the coordinates of the top left and bottom right corners of each group of farmland.
- Each subarray `[r1, c1, r2, c2]` represents a group of farmland with top left corner `(r1, c1)` and bottom right corner `(r2, c2)`.

## Constraints

- `m == land.length`
- `n == land[i].length`
- `1 <= m, n <= 300`
- `land` consists of only `0`'s and `1`'s.
- Groups of farmland are rectangular in shape.

## Example

```bash
# Sample Input
land = [[1,0,0],[0,1,1],[0,1,1]]

# Sample Output
[[0,0,0,0],[1,1,2,2]]
```
