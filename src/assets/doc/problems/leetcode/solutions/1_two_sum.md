# 1. Two Sum

## Intuition

The intuition behind this solution is to use a HashMap to store the elements of the array along with their indices. While iterating through the array, for each element, calculate its complement by subtracting it from the target. Check if the complement is present in the HashMap. If it is, return the indices of the two elements; otherwise, store the current element and its index in the HashMap for future lookups.

## Approach

1. Initialize a HashMap (`numMap`) to store the elements of the array along with their indices.
2. Iterate through the array `nums`.
3. For each element, calculate its complement by subtracting it from the `target`.
4. Check if the complement is present in the `numMap`.
   - If yes, return the indices of the two elements.
   - If not, store the current element and its index in the `numMap` for future lookups.
5. If no such pair is found, return an empty array.

## Complexity

- Time complexity: `O(n)`. The algorithm iterates through the array once, performing constant-time operations for each element.

- Space complexity: `O(n)`. The space complexity is determined by the HashMap, which may store all elements of the array in the worst case.

## Code

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (numMap.containsKey(complement)) return new int[]{numMap.get(complement), i};

            numMap.put(nums[i], i);
        }

        return new int[]{};
    }
}
```
