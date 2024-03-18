# 57. Insert Interval

## Intuition

The problem requires merging a new interval into a set of existing intervals while maintaining the sorted order. The given code appears to iterate through the intervals to identify the correct position to insert the new interval and merge overlapping intervals if necessary.

## Approach

1. Initialize an empty list `result` to store the merged intervals.
2. Iterate through the existing intervals until reaching an interval whose end is less than the start of the new interval. Add these intervals directly to the `result` list.
3. While iterating through the `intervals` and encountering overlapping intervals, update the start and end of the new interval based on the overlapping intervals.
4. Add the updated new interval to the `result` list.
5. Add any remaining `intervals` after the new interval to the `result` list.
6. Convert the list of merged intervals to a `2D` array and return it.

## Complexity

- Time complexity: `O(n)` where `n` is the number of intervals in the input array. The algorithm iterates through the `intervals` once.

- Space complexity: `O(n)` where `n` is the number of intervals in the input array. The space is used to store the merged `intervals` in the `result` list.

## Code

```java
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new ArrayList<>();
        int i = 0;

        while (i < intervals.length && intervals[i][1] < newInterval[0]) {
            result.add(intervals[i++]);
        }

        while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.add(newInterval);

        while (i < intervals.length) {
            result.add(intervals[i++]);
        }

        return result.toArray(new int[result.size()][]);
    }
}
```
