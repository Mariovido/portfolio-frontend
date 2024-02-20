# 1642. Furthest Building You Can Reach

## Description

Given an array `heights` representing the heights of buildings, and integers `bricks` and `ladders` representing the number of bricks and ladders available, respectively, this problem involves finding the furthest building index that can be reached by moving from one building to the next, using either bricks or ladders optimally.

## Function

```java
public int furthestBuilding(int[] heights, int bricks, int ladders) {}
```

## Input Format

- `heights`: An integer array representing the heights of buildings.
- `bricks`: An integer representing the number of bricks available.
- `ladders`: An integer representing the number of ladders available.

## Output Format

- An integer representing the furthest building index that can be reached.

## Constraints

- `1 <= heights.length <= 10^5`
- `1 <= heights[i] <= 10^6`
- `0 <= bricks <= 10^9`
- `0 <= ladders <= heights.length`

## Example

```bash
# Sample Input
int[] heights1 = {4, 2, 7, 6, 9, 14, 12};
int bricks1 = 5;
int ladders1 = 1;

# Sample Output
4
```
