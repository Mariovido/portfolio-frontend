# 2966. Divide Array Into Arrays With Max Difference

## Intuition

The problem requires dividing an array into subarrays of size `3`, such that the maximum difference between any two elements within each subarray is less than or equal to a given value `k`. We can start by sorting the array to ensure that the elements within each subarray are as close as possible to each other. Then, we iterate through the sorted array in increments of `3`, checking if the difference between the maximum and minimum elements within each subarray exceeds `k`. If it does, we return an empty array, indicating that it's not possible to divide the array according to the given constraints.

## Approach

1. Sort the input array `nums`.
2. Create a 2D array called `result` to store the divided subarrays.
3. Iterate through the sorted `nums` array in increments of `3`.
4. For each iteration, check if the difference between the maximum and minimum elements within the current subarray exceeds `k`.
5. If the difference exceeds `k`, return an empty 2D array.
6. Otherwise, store the current subarray in the `result` array.
7. Return the `result` array.

## Complexity

- Time complexity: Sorting the array takes `O(n * log(n))` time, where `n` is the length of the input array. Iterating through the sorted array and creating the result array takes `O(n)` time. Thus, the overall time complexity is `O(n * log(n))`.

- Space complexity: We use additional space to store the sorted array and the result array. The space complexity is `O(n)` for the sorted array and `O(n / 3)` for the result array, which simplifies to `O(n)`. So, the overall space complexity is `O(n)`.

## Code

```java
class Solution {
    public int[][] divideArray(int[] nums, int k) {
        int len = nums.length;

        Arrays.sort(nums);

        int[][] result = new int[len / 3][3];
        for (int i = 0, j = 0; i < len; i += 3, j++) {
            if (nums[i + 2] - nums[i] > k) return new int[0][0];
            result[j][0] = nums[i];
            result[j][1] = nums[i + 1];
            result[j][2] = nums[i + 2];
        }

        return result;
    }
}
```
