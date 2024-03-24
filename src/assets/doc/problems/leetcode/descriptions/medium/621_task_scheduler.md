# 621. Task Scheduler

## Description

This problem focuses on finding the minimum number of intervals required to complete a list of CPU tasks with a given cooling time constraint. Each task is identified by a letter, and identical tasks must be spaced out by at least n intervals to allow for cooling.

## Function

```java
public int leastInterval(char[] tasks, int n) {}
```

## Input Format

- The first line receives an array of characters representing `tasks`.
- The second line receives an integer `n`, the cooling time between identical tasks.

## Output Format

- A single integer representing the minimum number of intervals needed to complete all tasks.

## Constraints

- `1 <= tasks.length <= 10^4`
- `tasks[i]` is an uppercase English letter.
- `0 <= n <= 100`

## Example

```bash
# Sample Input
tasks = ["A", "A", "A", "B", "B", "B"], n = 2

# Sample Output
8
```
