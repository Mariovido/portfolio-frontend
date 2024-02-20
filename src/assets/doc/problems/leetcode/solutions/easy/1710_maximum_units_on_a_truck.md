# 1710. Maximum Units on a Truck

## Intuition

The problem seems to involve maximizing the number of units that can be loaded onto a truck given a certain number of box types with their respective unit counts and box counts.

## Approach

1. Sort the box types based on the number of units they contain in descending order.
2. Iterate through the sorted box types.
3. For each box type, calculate the number of boxes to load onto the truck. This is the minimum of the available boxes and the remaining space on the truck.
4. Add the product of boxes to load and units per box to the total units loaded.
5. Update the remaining space on the truck.
6. Break the loop if the truck is full.
7. Return the total units loaded.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the box types takes `O(n * log(n))` time, where n is the number of box types.
  - The loop to iterate through the box types takes `O(n)` time.

- Space complexity: `O(1)` since we are using only a constant amount of extra space for variables regardless of the input size.

## Code

```java
class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        Arrays.sort(boxTypes, (a, b) -> Integer.compare(b[1], a[1]));

        int maxUnits = 0;
        for (int i = 0; i < boxTypes.length; i++) {
            int boxes = boxTypes[i][0];
            int units = boxTypes[i][1];

            int boxesToLoad = Math.min(boxes, truckSize);

            maxUnits += boxesToLoad * units;
            truckSize -= boxesToLoad;

            if (truckSize == 0) break;
        }

        return maxUnits;
    }
}
```
