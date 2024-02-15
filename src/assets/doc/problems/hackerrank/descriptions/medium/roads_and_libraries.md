# Roads and Libraries

## Description

Given the layout of HackerLand with cities and possible bidirectional roads, the task is to determine the minimum cost to provide library access to all citizens. A citizen has access to a library if their city contains a library or they can travel by road to a city with a library. The cost of building a road and a library is given. The goal is to minimize the overall cost.

## Function

```java
public static long roadsAndLibraries(int n, int c_lib, int c_road, List<List<Integer>> cities) {}
```

## Input Format

- The first line: a single integer `q`, the number of queries.
- For each query:
  - Four space-separated integers: `n` (number of cities), `m` (number of roads), `c_lib` (cost to build a library), `c_road` (cost to repair a road).
  - Each of the next `m` lines contains two space-separated integers, `u[i]` and `v[i]`, representing bidirectional roads.

## Output Format

- An integer, the minimal cost.

## Constraints

- `1 <= q <= 10`
- `1 <= n <= 10^5`
- `0 <= m <= min(10^5, (n * (n - 1)) / 2)`
- `1 <= c_road, c_lib <= 10^5`
- `1 <= u[i], v[i] <= n`
- Each road connects two distinct cities.

## Example

```bash
# Sample Input
2
3 3 2 1
1 2
3 1
2 3
6 6 2 5
1 3
3 4
2 4
1 2
2 3
5 6

# Sample Output
4
12
```
