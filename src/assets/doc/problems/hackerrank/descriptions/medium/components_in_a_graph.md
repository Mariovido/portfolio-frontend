# Components in a graph

## Description

Given a graph with `2 * N` nodes and a list of edges connecting some nodes, the task is to determine the size of the smallest and largest connected components that have `2` or more nodes. Single nodes should not be considered in the answer.

## Function

```java
public static List<Integer> componentsInGraph(List<List<Integer>> gb) {}
```

## Input Format

- The first line: an integer `n`, the size of `bg`.
- Each of the next `n` lines contains two space-separated integers, `bg[i][0]` and `bg[i][1]`.

## Output Format

- An array with `2` integers, the smallest and largest component sizes.

## Constraints

- `1 <= number of nodes N <= 15000`
- `1 <= bg[i][0] <= N`
- `N + 1 <= bg[i][1] <= 2 * N`

## Example

```bash
# Sample Input
5
1 6
2 7
3 8
4 9
2 6

# Sample Output
[2, 4]
```
