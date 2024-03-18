# 452. Minimum Number of Arrows to Burst Balloons

## Intuition

The problem likely involves finding the minimum number of arrows required to burst balloons represented by intervals on a coordinate plane. Since the arrows burst all balloons in their range, it would be optimal to shoot them where the most number of balloons overlap. Thus, we might need to sort the intervals by their ending points to find such optimal positions.

## Approach

1. Sort the given intervals based on their ending points.
2. Initialize the arrow position to the ending point of the first interval and the arrow count to `1`.
3. Iterate through the sorted intervals from the second one.
4. If the starting point of the current interval is greater than the arrow position, it implies that a new arrow is required, so increment the arrow count and update the arrow position to the ending point of the current interval.
5. Continue until all intervals are processed.
6. Return the arrow count, which represents the minimum number of arrows needed.

## Complexity

- Time complexity: `O(n * log(n))`, where `n` is the number of intervals.

- Space complexity: `O(1)` since we are using only a constant amount of extra space for variables.

## Code

```java
class Solution {
    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));

        int arrowPos = points[0][1];
        int arrowCount = 1;

        for (int i = 1; i < points.length; i++) {
            if (points[i][0] > arrowPos) {
                arrowCount++;
                arrowPos = points[i][1];
            }
        }

        return arrowCount;
    }
}
```
