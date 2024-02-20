# 560. Subarray Sum Equals K

## Intuition

The problem can be solved efficiently using a hashmap to keep track of the frequency of encountered sums. We observe that the sum of elements from the beginning of the array up to a certain index is equivalent to the difference between the sum up to that index and the desired sum `k`. Therefore, by maintaining a hashmap where the keys represent the cumulative sum up to the current index and the values represent the frequency of that sum, we can quickly determine the number of subarrays with the desired sum.

## Approach

1. Initialize variables `count` to keep track of the number of subarrays with sum `k`.
2. Create a hashmap `sumFreq` to store the frequency of encountered sums. Initialize it with a single entry, `{0: 1}`, indicating that a sum of `0` has been encountered once.
3. Initialize `sum` to `0`.
4. Iterate through the array `nums`.
   - Increment `sum` by the current element `num`.
   - Calculate the `complement` `complement = sum - k`.
   - Increment `count` by the frequency of `complement` in `sumFreq`.
   - Update the frequency of `sum` in `sumFreq`.
5. Return `count`, which represents the number of subarrays with sum `k`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the nums array. This is because we traverse the array once and perform constant time operations within the loop.

- Space complexity: `O(n)` because the hashmap `sumFreq` can potentially store up to `n` distinct cumulative sums, where `n` is the length of the input array `nums`.

## Code

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int count = 0;

        Map<Integer, Integer> sumFreq = new HashMap<>();
        sumFreq.put(0, 1);

        int sum = 0;
        for (int num : nums) {
            sum += num;
            int complement = sum - k;
            count += sumFreq.getOrDefault(complement, 0);
            sumFreq.put(sum, sumFreq.getOrDefault(sum, 0) + 1);
        }

        return count;
    }
}
```
