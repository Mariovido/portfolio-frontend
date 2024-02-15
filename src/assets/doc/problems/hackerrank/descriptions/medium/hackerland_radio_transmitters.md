# Hackerland Radio Transmitters

## Description

Hackerland is a one-dimensional city with houses aligned at integral locations along a road. The Mayor wants to install radio transmitters on the roofs of the city's houses. Each transmitter has a fixed range, meaning it can transmit a signal to all houses within that number of units distance away.

## Function

```java
public static int hackerlandRadioTransmitters(List<Integer> x, int k) {}
```

## Input Format

- The first line: two space-separated integers `n` and `k`, the number of houses in Hackerland and the range of each transmitter.
- The second line: `n` space-separated integers describing the respective locations of each house `x[i]`.

## Output Format

- Print a single integer denoting the minimum number of transmitters needed to cover all of the houses.

## Constraints

- `1 <= n, k <= 10^5`
- `1 <= x[i] <= 10^5`
- There may be more than one house at the same location.

## Example

```bash
# Sample Input
5 1
1 2 3 4 5

# Sample Output
2
```
