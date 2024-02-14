# Truck Tour

## Intuition

This problem can be solved by using a greedy approach. We need to find the starting point from which a truck can complete a circular tour of petrol pumps without running out of petrol. The intuition here is to start from each petrol pump and simulate moving around the circle. If at any point the truck's petrol becomes negative, we reset the starting point to the next petrol pump and reset the total petrol.

## Approach

1. Initialize two variables: `start` to keep track of the potential starting point and `totalPetrol` to keep track of the total petrol the truck has.
2. Iterate through each petrol pump.
3. At each petrol pump, subtract the petrol required to reach the next pump from the available petrol and update `totalPetrol`.
4. If `totalPetrol` becomes negative at any point, reset `totalPetrol` to `0` and update `start` to the index of the next petrol pump.
5. Finally, return the index of the petrol pump where we started from successfully.

## Complexity

- Time complexity: `O(n)` where `n` is the number of petrol pumps. We iterate through the list of petrol pumps once.

- Space complexity: `O(1)` as we only use a constant amount of extra space for variables `start` and `totalPetrol`.

## Code

```java
class Result {
    public static int truckTour(List<List<Integer>> petrolpumps) {
        int start = 0;
        int totalPetrol = 0;

        for (int i = 0; i < petrolpumps.size(); i++) {
            totalPetrol += petrolpumps.get(i).get(0) - petrolpumps.get(i).get(1);

            if (totalPetrol < 0) {
                totalPetrol = 0;
                start = i + 1;
            }
        }

        return start;
    }
}
```
