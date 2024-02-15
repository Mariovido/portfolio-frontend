# Equal Stacks

## Description

Given three stacks of cylinders, each with varying heights, the task is to find the maximum possible height of the stacks such that all three stacks are exactly the same height. Heights can be adjusted by removing and discarding the top cylinders any number of times.

## Function

```java
public static int equalStacks(List<Integer> h1, List<Integer> h2, List<Integer> h3) {}
```

## Input Format

- Three space-separated integers: `n1`, `n2`, and `n3` (number of cylinders in stacks `1`, `2`, and `3`).
- Subsequent lines describe the respective heights of each cylinder in a stack from top to bottom.
  - `n1` space-separated integers: heights of cylinders in stack `1`.
  - `n2` space-separated integers: heights of cylinders in stack `2`.
  - `n3` space-separated integers: heights of cylinders in stack `3`.

## Output Format

- An integer representing the height of the stacks when they are equalized.

## Constraints

- `0 < n1, n2, n3 <= 10^5`
- `0 < height of any cylinder <= 100`

## Example

```bash
# Sample Input
5 3 4
3 2 1 1 1
4 3 2
1 1 4 1

# Sample Output
5
```
