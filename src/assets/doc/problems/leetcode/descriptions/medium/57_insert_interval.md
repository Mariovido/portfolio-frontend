# 57. Insert Interval

## Description

Given a list of non-overlapping intervals sorted in ascending order and another interval, this problem involves inserting the new interval into the list while maintaining the sorted order and ensuring that there are no overlapping intervals. If necessary, overlapping intervals are merged.

## Function

```java
public int[][] insert(int[][] intervals, int[] newInterval) {}
```

## Input Format

- A list of non-overlapping intervals represented as a `2D` array `intervals`, where each interval is represented by an array `[starti, endi]`.
- The new interval to insert, represented as a `1D` array `newInterval = [start, end]`.

## Output Format

- A `2D` array representing the intervals after the insertion.

## Constraints

- `0 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^5`
- `intervals` is sorted by `starti` in ascending order.
- `newInterval.length == 2`
- `0 <= start <= end <= 10^5`

## Example

```bash
# Sample Input
intervals = [[1,3],[6,9]], newInterval = [2,5]

# Sample Output
[[1,5],[6,9]]
```
