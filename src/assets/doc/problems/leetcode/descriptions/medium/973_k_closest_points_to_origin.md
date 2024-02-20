# 973. K Closest Points to Origin

## Description

Given an array of points on the `X-Y` plane and an integer `k`, this problem involves returning the `k` closest points to the origin `(0, 0)`. The distance between two points on the `X-Y` plane is calculated using the Euclidean distance formula. The result is guaranteed to be unique, and it can be returned in any order.

## Function

```java
public int[][] kClosest(int[][] points, int k) {}
```

## Input Format

- An array of points: `points[i] = [xi, yi]` represents a point on the `X-Y` plane.
- An integer `k`, representing the number of closest points to return.

## Output Format

- An array containing the `k` closest points to the origin.

## Constraints

- `1 <= k <= points.length <= 10^4`
- `-10^4 <= xi, yi <= 10^4`

## Example

```bash
# Sample Input
points = [[1,3],[-2,2]], k = 1

# Sample Output
[[-2,2]]
```
