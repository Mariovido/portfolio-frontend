# 442. Find All Duplicates in an Array

## Intuition

The given code suggests an approach based on the concept of marking elements as visited. Since the numbers in the array are within the range of `1` to `n` (where `n` is the size of the array), we can utilize the indices and mark visited elements by negating their corresponding values. If an element has already been marked as visited (i.e., if its corresponding index already contains a negative value), it indicates a duplicate.

## Approach

1. Initialize an empty list to store the duplicates.
2. Iterate through each element in the given array.
3. For each element, calculate the `index` as the absolute value of the element minus `1` (since the array is `0`-indexed and the numbers are within the range `1` to `n`).
4. Check if the value at the calculated `index` is negative. If it is, add the `index` plus `1` to the list of duplicates, as it indicates that the element has appeared before.
5. If the value at the calculated `index` is not negative, negate it to mark it as visited.
6. After iterating through all elements, return the list of duplicates.

## Complexity

- Time complexity: `O(n)`, where `n` is the size of the input array.

- Space complexity: `O(1)` because the additional space used is independent of the size of the input array. The space required for the list to store duplicates is not counted in the space complexity analysis since it is part of the output.

## Code

```java
class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> result = new ArrayList<>();

        for (int num : nums) {
            int index = Math.abs(num) - 1;

            if (nums[index] < 0) result.add(index + 1);
            else nums[index] = -nums[index];
        }

        return result;
    }
}
```
