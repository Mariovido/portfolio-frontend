# 2958. Length of Longest Subarray With at Most K Frequency

# Intuition

Given a problem where we need to find the maximum length of a subarray with elements repeating at most `k` times, my first thought is to use a sliding window approach. This approach is intuitive because it allows us to dynamically adjust the size of our window (subarray) based on the constraint of element repetitions. We can keep expanding the window to include new elements until we violate the condition that an element can repeat at most `k` times. Once the condition is violated, we shrink the window from the left until the condition is satisfied again.

# Approach

1. Initialize a frequency map (`frequencyMap`) to keep track of the count of each element within the current window.
2. Set two pointers, `left` and `right`, to denote the start and the end of the sliding window, respectively. Initially, both are at the start of the array.
3. Iterate through the array with the `right` pointer, expanding the window by including the current element in the `frequencyMap` and updating its frequency.
4. After adding an element to the window, check if its frequency exceeds `k`. If it does, we need to shrink the window from the left by moving the `left` pointer to the right until the frequency of the current `right` element does not exceed `k`. During this process, decrement the frequency of the elements being removed from the window.
5. Calculate the maximum length of the subarray during each iteration by comparing the current length (`right - left + 1`) with the previously recorded maximum length.
6. Continue this process until the `right` pointer has traversed the entire array.
7. Return the maximum length found.

# Complexity

- Time complexity: `O(n)`

  - The entire array is traversed once with the `right` pointer, and each element is processed in constant time. Even though we are also moving the `left` pointer and updating the frequency map, each element is added and removed from the map exactly once, leading to a linear time complexity.

- Space complexity: `O(n)`
  - In the worst case, the frequency map might need to store an entry for every unique element in the array. Therefore, the space complexity depends on the number of unique elements, which in the worst case can be as large as the array itself, hence `O(n)`.

# Code

```java
class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        int left = 0;
        int maxLength = 0;

        for (int right = 0; right < nums.length; right++) {
            frequencyMap.put(nums[right], frequencyMap.getOrDefault(nums[right], 0) + 1);

            while (frequencyMap.get(nums[right]) > k) {
                frequencyMap.put(nums[left], frequencyMap.get(nums[left]) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
```
