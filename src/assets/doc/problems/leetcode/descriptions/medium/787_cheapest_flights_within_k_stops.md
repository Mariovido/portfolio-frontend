# 787. Cheapest Flights Within K Stops

## Description

Given a set of flights connecting cities with associated costs, this problem involves finding the cheapest price from a source city to a destination city with at most a certain number of stops.

## Function

```java
public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {}
```

## Input Format

- `n`: an integer representing the number of cities &rarr; `1 <= n <= 100`.
- `flights`: a `2D` array representing flights, where `flights[i] = [fromi, to_{i}, price_{i}]` indicates a flight from city `from_{i}` to city `to_{i}` with cost `price_{i}`.
- `src`: an integer representing the source city &rarr; `0 <= src < n`.
- `dst`: an integer representing the destination city &rarr; `0 <= dst < n`.
- `k`: an integer representing the maximum number of stops allowed &rarr; `0 <= k < n`.

## Output Format

- An integer representing the cheapest price from the source city to the destination city with at most `k` stops. If there is no such route, return `-1`.

## Constraints

- `1 <= n <= 100`
- `0 <= flights.length <= (n * (n - 1) / 2)`
- `flights[i].length == 3`
- `0 <= from_{i}, to_{i} < n`
- `from_{i} != to_{i}`
- `1 <= price_{i} <= 104`
- There will not be any multiple flights between two cities.
- `0 <= src, dst, k < n`
- `src != dst`

## Example

```bash
# Sample Input
int n1 = 4;
int[][] flights1 = {{0,1,100},{1,2,100},{2,0,100},{1,3,600},{2,3,200}};
int src1 = 0, dst1 = 3, k1 = 1;

# Sample Output
700
```
