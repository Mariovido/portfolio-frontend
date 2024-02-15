# New Year Chaos

## Description

Given a queue representing the initial positions of people in line for a rollercoaster ride, determine the minimum number of bribes that occurred to reach a given queue order. A person can bribe the person directly in front of them to swap positions, but they can bribe at most two others.

## Function

```java
public static void minimumBribes(List<Integer> q) {}
```

## Input Format

- The first line: an integer, `t`, the number of test cases.
- For each test case:
  - The first line contains an integer, `n`, the number of people in the queue.
  - The second line has `n` space-separated integers describing the final state of the queue.

## Output Format

- The super digit of `n` repeated `k` times.

## Constraints

- `1 <= t <= 10`
- `1 <= n <= 10^5`

## Subtasks

- For `60%` score: `1 <= n <= 10^3`
- For `100%` score: `1 <= n <= 10^5`

## Example

```bash
# Sample Input
2
5
2 1 5 3 4
5
2 5 1 3 4

# Sample Output
3
Too chaotic
```

> **NOTE**: In the second example, person `4` had to bribe `3` people to get to the current position, so it is `Too chaotic`.
