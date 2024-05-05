# 2441. Largest Positive Integer That Exists With Its Negative

## Intuition

When presented with the task of finding the maximum integer `k` in an array such that both `k` and `-k` are present, the first thing that comes to mind is the need to efficiently check for the existence of both a number and its negative counterpart. Using a hash set allows for quick lookups, which can speed up the process of determining if the opposite number exists for any given number in the array.

## Approach

1. **Initialize a hash set and a variable**: Start by creating a hash set to store all the numbers from the array. Also, initialize a variable `maxK` to `-1`, which will store the maximum value of `k` found.
2. **Add all numbers to the set**: Iterate through the array of numbers and add each number to the hash set. This allows for constant time complexity lookups in subsequent steps.
3. **Determine the maximum `k`**: Iterate through the array again and for each positive number, check if its negative counterpart exists in the set. If it does, update `maxK` with the maximum of its current value and the number.
4. **Return the result**: After checking all numbers, return `maxK`, which will be the largest `k` such that both `k` and `-k` are present in the array, or `-1` if no such k exists.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of elements in the array. This includes `O(n)` for inserting all elements into the hash set and another `O(n)` for checking each element's negative counterpart.

- Space complexity: `O(n)`, as in the worst case, the hash set may contain all unique elements from the array if no negative counterpart exists for any number.

## Code

```java
class Solution {
    public int findMaxK(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        int maxK = -1;

        for (int num : nums) {
            numSet.add(num);
        }

        for (int num : nums) {
            if (num > 0 && numSet.contains(-num)) maxK = Math.max(maxK, num);
        }

        return maxK;
    }
}
```
