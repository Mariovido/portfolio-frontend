# Sherlock and Array

## Intuition

The problem requires determining if there exists an index in the array where the sum of elements to the left of it is equal to the sum of elements to its right. The intuition here is to iterate through the array and keep track of the sum of elements seen so far from the left side. If at any point this sum multiplied by `2` equals the total sum of the array minus the current element, it implies that the array can be balanced at that index.

## Approach

1. Calculate the total sum of all elements in the array.
2. Initialize a variable `leftSum` to `0`.
3. Iterate through the array.
4. For each element in the array, check if `leftSum * 2` is equal to `totalSum - currentElement`.
5. If the condition is satisfied, return `YES` indicating a balanced point.
6. Otherwise, add the current element to `leftSum`.
7. If no balanced point is found after iterating through the array, return `NO`.

## Complexity

- Time complexity: `O(n)`
  - The algorithm iterates through the array once, performing constant-time operations at each step.
- Space complexity: `O(1)`
  - The algorithm uses only a constant amount of extra space regardless of the input size.

## Code

```java
class Result {
    public static String balancedSums(List<Integer> arr) {
        int leftSum = 0;
        int totalSum = arr.stream().mapToInt(a -> a).sum();

        for (int middleNum : arr) {
            if (leftSum * 2 == totalSum - middleNum) return "YES";
            leftSum += middleNum;
        }

        return "NO";
    }
}
```
