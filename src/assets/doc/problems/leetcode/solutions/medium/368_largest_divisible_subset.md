# 368. Largest Divisible Subset

## Intuition

The problem requires finding the largest divisible subset from a given array of integers. One intuitive approach could be to start by sorting the array so that we can iterate over it in a systematic manner. We can then use dynamic programming to track the length of the largest divisible subset ending at each index. By keeping track of the parent index for each element in the subset, we can reconstruct the subset at the end.

## Approach

1. Sort the input array `nums`.
2. Initialize two arrays, `dp` and `parent`, both of length `n`, where `n` is the length of nums.
3. Initialize `dp[i]` to `1` for all `i`, as the minimum length of any subset is `1`.
4. Initialize `parent[i]` to `-1` for all `i`.
5. Iterate over each element `nums[i]` in the sorted array.
   - For each element, iterate backwards from `i-1` to `0` to find the previous element `nums[j]` where `nums[i] % nums[j] == 0`.
   - Update `dp[i]` to the maximum of `dp[i]` and `dp[j] + 1`.
   - Update `parent[i]` to `j` if `dp[j] + 1` is greater than `dp[i]`.
   - Keep track of the maximum length and its corresponding index.
6. Reconstruct the largest divisible subset by starting from the `maxIdx` and adding elements to the result list by following the parent indices until reaching `-1`.
7. Return the result list.

## Complexity

- Time complexity: Overall, the time complexity is `O(n^2)`.

  - Sorting the array takes `O(n * log(n))` time.
  - The nested loops iterate over each element of the array, resulting in a time complexity of `O(n^2)` for the dynamic programming part.
  - Reconstructing the subset takes `O(n)` time.

- Space complexity: Overall space complexity is `O(n)`.
  - Two arrays `dp` and `parent` are used, each of size `n`, resulting in a space complexity of `O(n)`.
  - Additional space is used for the `result` list, which can be at most `n` in size.

## Code

```java
class Solution {
    public List<Integer> largestDivisibleSubset(int[] nums) {
        Arrays.sort(nums);

        int n = nums.length;
        int[] dp = new int[n];
        int[] parent = new int[n];
        Arrays.fill(dp, 1);
        Arrays.fill(parent, -1);

        int maxLen = 0;
        int maxIdx = -1;

        for (int i = 0; i < n; i++) {
            for (int j = i - 1; j >= 0; j--) {
                if (nums[i] % nums[j] == 0 && dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    parent[i] = j;
                }
            }

            if (dp[i] > maxLen) {
                maxLen = dp[i];
                maxIdx = i;
            }
        }

        List<Integer> result = new ArrayList<>();
        while (maxIdx != -1) {
            result.add(nums[maxIdx]);
            maxIdx = parent[maxIdx];
        }

        return result;
    }
}
```
