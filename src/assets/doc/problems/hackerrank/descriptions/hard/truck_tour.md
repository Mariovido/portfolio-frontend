# Truck Tour

## Description

Given a circular route with `N` petrol pumps, each represented by the amount of petrol it provides and the distance to the next petrol pump, find the starting point from which a truck can complete the circle. The truck consumes one liter of petrol for every kilometer traveled.

## Function

```java
public static int truckTour(List<List<Integer>> petrolpumps) {}
```

## Input Format

- The first line: an integer, `N`, representing the number of petrol pumps &rarr; `1 <= N <= 10^5`.
- The next `N` lines: pairs of integers, representing the amount of petrol and distance to the next petrol pump `1 <= amount of petrol, distance <= 10^9`.

## Output Format

- An integer, the smallest index of the petrol pump from which the truck can start the tour.

## Constraints

- `1 <= N <= 10^5`
- `1 <= amount of petrol, distance <= 10^9`

## Example

```bash
# Sample Input
3
1 5
10 3
3 4

# Sample Output
1
```
