# Lego Blocks

## Description

Given an infinite number of Lego block types, each defined by its depth, height, and width, this problem involves building a wall of specified height and width using these blocks. The goal is to count the number of valid wall formations while adhering to certain constraints.

## Function

```java
public static int legoBlocks(int n, int m) {}
```

## Input Format

- The first line: an integer, `t`, representing the number of test cases &rarr; `1 <= t <= 100`.
- Each of the next `t` lines contains two space-separated integers, `n` and `m` &rarr; `1 <= n, m <= 1000`.

## Output Format

- An integer, the number of valid wall formations modulo `10^9 + 7`.

## Constraints

- `1 <= t <= 100`
- `1 <= n, m <= 1000`

## Example

```bash
# Sample Input
4
2 2
3 2
2 3
4 4

# Sample Output
3
7
9
3375
```
