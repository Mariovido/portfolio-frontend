# 930. Binary Subarrays With Sum

## Intuition

The code seems to utilize the concept of prefix sum along with a hashmap to efficiently count the number of subarrays with a given sum. It maintains a running sum while iterating through the array and uses a hashmap to store the count of prefix sums encountered so far.

## Approach

1. Initialize variables `count` and `sum` to keep track of the count of subarrays and the current sum respectively.
2. Create a hashmap `prefixSumCount` to store the count of prefix sums encountered so far. Initialize it with a key-value pair of (`0`, `1`) to handle the case when the sum equals the goal from the beginning of the array.
3. Iterate through the array `nums`.
4. Update `sum` by adding the current element `num`.
5. Calculate the `complement`, which is `sum - goal`, to find the prefix sum that, when subtracted from the current sum, gives the desired goal.
6. Increment `count` by the value corresponding to the complement in the `prefixSumCount` hashmap. This represents the number of subarrays found so far that `sum` up to the `goal`.
7. Update the `count` of the current prefix sum by putting it into the `prefixSumCount` hashmap.
8. Return the final `count`.

## Complexity

- Time complexity: `O(n)`, where n is the length of the input array.

- Space complexity: `O(n)`, due to the usage of the hashmap to store prefix sums, which can have up to n entries in the worst case.

## Code

```java
class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        int count = 0;
        int sum = 0;
        Map<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1);

        for (int num : nums) {
            sum += num;
            int complement = sum - goal;
            count += prefixSumCount.getOrDefault(complement, 0);
            prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
        }

        return count;
    }
}
```
