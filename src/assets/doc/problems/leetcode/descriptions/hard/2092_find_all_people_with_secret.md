# 2092. Find All People With Secret

## Description

In a scenario involving `n` people, each identified by numbers from `0` to `n - 1`, a secret is initially shared by person `0` with `firstPerson`. Meetings are represented as a `2D` array `meetings[i] = [x_{i}, y_{i}, time_{i}]`, indicating that person `x_{i}` and person `y_{i}` meet at `time_{i}`. The secret spreads as people meet, with the potential for simultaneous sharing at the same time frame. The goal is to determine who knows the secret after all meetings.

## Function

```java
public List<Integer> findAllPeople(int n, int[][] meetings, int firstPerson) {}
```

## Input Format

- An integer `n` denotes the total number of people.
- A `2D` integer array `meetings`, where `meetings[i] = [x_{i}, y_{i}, time_{i}]` signifies a meeting between `x_{i}` and `y_{i}` at `time_{i}`.
- An integer `firstPerson`, indicating the first person (other than person `0`) to know the secret initially.

## Output Format

- A list of integers representing all the people who know the secret after all meetings, in any order.

## Constraints

- `2 <= n <= 10^5`
- `1 <= meetings.length <= 10`
- `meetings[i].length == 3`
- `0 <= x_{i}, y_{i} < n`, `x_{i} != y_{i}`
- `1 <= time_{i} <= 10`
- `1 <= firstPerson < n − 1`

## Example

```bash
# Sample Input
n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1

# Sample Output
[0,1,2,3,5]
```
