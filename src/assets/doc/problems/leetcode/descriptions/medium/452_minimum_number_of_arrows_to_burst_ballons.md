# 452. Minimum Number of Arrows to Burst Balloons

## Description

Given a `2D` array representing spherical balloons on an `XY`-plane, where each balloon is defined by `[x_{start}, x_{end}]`, the goal is to find the minimum number of vertically shot arrows to burst all balloons. An arrow shot at `x` will burst balloons whose horizontal diameters are covered by `x`.

## Function

```java
public int findMinArrowShots(int[][] points) {}
```

## Input Format

- An integer `n`, representing the number of balloons &rarr; `1 <= n <= 10^5`.
- A `2D` integer array points where `points[i] = [x_{start}, x_{end}]` &rarr; `−2^{31} <= x_{start} < x_{end} <= 2^{31} - 1`.

## Output Format

- An integer representing the minimum number of arrows required to burst all balloons.

## Constraints

- `1 <= points.length <= 10^5`
- `points[i].length == 2`
- `−2^{31} <= x_{start} < x_{end} <= 2^{31} - 1`

## Example

```bash
# Sample Input
points = [[10,16],[2,8],[1,6],[7,12]]

# Sample Output
2
```
