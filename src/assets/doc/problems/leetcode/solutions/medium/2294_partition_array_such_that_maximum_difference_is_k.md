# 2294. Partition Array Such That Maximum Difference Is K

## Intuition

The solution aims to minimize the number of subsequences such that the difference between the maximum and minimum value in each subsequence does not exceed a given threshold `k`. A greedy approach is ideal here: if we sort the array, we can group consecutive numbers together as long as their range stays within the allowed difference.

## Approach

1. Sort the input array `nums` in non-decreasing order.
2. Initialize a counter `count` to `1` since at least one subsequence is needed.
3. Track the smallest value in the current subsequence (`start`).
4. Iterate through the sorted array:
   1. If the current number differs from `start` by more than `k`, we start a new subsequence and update `start`.
5. Return the number of subsequences created.

## Complexity

- Time complexity: `O(n * log(n))`, where `n` is the length of `nums`, due to sorting.

- Space complexity: `O(1)`, since sorting is done in-place and only a few variables are used.

## Code

```java
class Solution {
    public int partitionArray(int[] nums, int k) {
        Arrays.sort(nums);
        int count = 1;
        int start = nums[0];

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] - start > k) {
                count++;
                start = nums[i];
            }
        }

        return count;
    }
}
```
