# 992. Subarrays with K Different Integers

## Intuition

The goal of this problem is to find the number of subarrays in the given array `nums` that contain exactly `k` distinct elements. The provided solution involves utilizing a sliding window approach to maintain a subarray with at most `k` distinct elements.

## Approach

1. Define a method `subarraysWithKDistinct` that takes an integer array `nums` and an integer `k` as input.
2. In this method, calculate the count of subarrays with at most `k` distinct elements by calling the method `countSubarraysWithAtMostKDistinct` twice and subtracting the results.
3. Define a helper method `countSubarraysWithAtMostKDistinct` that takes an integer array `nums` and an integer `k` as input.
4. Initialize variables `left` and `result` to `0`. Also, create a hashmap `frequencyMap` to store the frequency of elements.
5. Iterate through the array using a sliding window technique:
   - Increment the count of `k` if the frequency of the current element is `0`.
   - Update the frequency of the current element in the `frequencyMap`.
   - While `k` is less than `0`, move the `left` pointer of the window to maintain at most `k` distinct elements.
     - Decrease the frequency of the leftmost element.
     - If the frequency becomes `0`, increment `k`.
   - Update the result by adding the length of the current subarray `(right - left + 1)`.
6. Return the final result.

## Complexity

- Time complexity: `O(n)` where `n` is the length of the input array `nums`. The algorithm iterates through the array once using the sliding window technique.

- Space complexity: `O(n)` where `n` is the length of the input array `nums`. The space is primarily used for the hashmap `frequencyMap` to store the frequency of elements.

## Code

```java
class Solution {
    public int subarraysWithKDistinct(int[] nums, int k) {
        return countSubarraysWithAtMostKDistinct(nums, k) - countSubarraysWithAtMostKDistinct(nums, k - 1);
    }

    private int countSubarraysWithAtMostKDistinct(int[] nums, int k) {
        int left = 0;
        int result = 0;
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int right = 0; right < nums.length; right++) {
            if (frequencyMap.getOrDefault(nums[right], 0) == 0) k--;

            frequencyMap.put(nums[right], frequencyMap.getOrDefault(nums[right], 0) + 1);

            while (k < 0) {
                frequencyMap.put(nums[left], frequencyMap.get(nums[left]) - 1);

                if (frequencyMap.get(nums[left++]) == 0) k++;
            }

            result += right - left + 1;
        }

        return result;
    }
}
```
