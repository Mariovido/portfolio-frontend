# 2402. Meeting Rooms III

## Description

Given a list of meetings represented by their start and end times, this problem involves allocating rooms to these meetings based on certain rules. The goal is to find the room that holds the most meetings and return its number. If multiple rooms hold the same number of meetings, return the room with the lowest number.

## Function

```java
public int mostBooked(int n, int[][] meetings) {}
```

## Input Format

- An integer `n`: the total number of rooms &rarr; `1 <= n <= 100`.
- A `2D` integer array meetings: represents the meetings where `meetings[i] = [starti, endi]` &rarr; `1 <= meetings.length <= 10^5`, `0 <= starti < endi <= 5 * 10^5`, and all values of `starti` are unique.

## Output Format

- An integer: the number of the room that held the most meetings.

## Constraints

- `1 <= n <= 100`
- `1 <= meetings.length <= 10^5`
- `0 <= starti < endi <= 5 * 10^5`
- All values of starti are unique.

## Example

```bash
# Sample Input
int n = 2;
int[][] meetings = {{0,10},{1,5},{2,7},{3,4}};

# Sample Output
0
```
