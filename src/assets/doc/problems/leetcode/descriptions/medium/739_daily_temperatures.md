# 739. Daily Temperatures

## Description

Given an array of integers `temperatures` representing daily temperatures, the task is to return an array `answer` such that `answer[i]` is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

## Function

```java
public int[] dailyTemperatures(int[] temperatures) {}
```

## Input Format

- An array of integers `temperatures` representing daily temperatures (`1 <= temperatures.length <= 10^5`, `30 <= temperatures[i] <= 100`).

## Output Format

- An array `answer` containing the number of days to wait for a warmer temperature after each day.

## Constraints

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`

## Example

```bash
# Sample Input
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

# Sample Output
[1, 1, 4, 2, 1, 1, 0, 0]
```
