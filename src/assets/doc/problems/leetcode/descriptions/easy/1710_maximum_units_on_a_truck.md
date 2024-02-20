# 1710. Maximum Units on a Truck

## Description

Given an array `boxTypes`, where each element `boxTypes[i] = [numberOfBoxes_{i}, numberOfUnitsPerBox_{i}]`, and an integer `truckSize`, representing the maximum number of boxes that can be put on the truck, the task is to determine the maximum total number of units that can be loaded onto the truck.

## Function

```java
public int maximumUnits(int[][] boxTypes, int truckSize) {}
```

## Input Format

- `boxTypes`: a `2D` array where `boxTypes[i] = [numberOfBoxes_{i}, numberOfUnitsPerBox_{i}]` represents the number of boxes of type `i` and the number of units per box for type `i`.
- `truckSize`: an integer representing the maximum number of boxes that can be put on the truck.

## Output Format

- An integer representing the maximum total number of units that can be loaded onto the truck.

## Constraints

- `1 <= boxTypes.length <= 1000`
- `1 <= numberOfBoxes_{i}, numberOfUnitsPerBox_{i} <= 1000`
- `1 <= truckSize <= 10^6`

## Example

```bash
# Sample Input
boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4

# Sample Output
8
```
