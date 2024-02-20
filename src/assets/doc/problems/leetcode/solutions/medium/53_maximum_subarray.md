# 53. Maximum Subarray

## Intuition

The problem seems to involve finding the maximum sum of a contiguous subarray within an array. We can start by initializing variables to keep track of the maximum sum seen so far and the current sum of the subarray we are examining.

## Approach

1. Initialize two variables `maxSum` and `currentSum` to `nums[0]`.
2. Iterate through the array `nums` starting from index `1`.
3. For each element `nums[i]`, update `currentSum` to be the maximum of either `nums[i]` or `currentSum + nums[i]`.
4. Update `maxSum` to be the maximum of `maxSum` and `currentSum`.
5. Return `maxSum` as the result.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input array nums. We iterate through the array once.

- Space complexity: `O(1)`, as we only use a constant amount of extra space for storing variables regardless of the size of the input array.

## Code

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}
```
