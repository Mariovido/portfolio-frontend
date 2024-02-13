# 1664. Ways to Make a Fair Array

## Intuition

The problem requires counting the number of ways to remove a single element from an array such that the sum of the remaining elements in the even and odd indices becomes equal. Initially, we can precompute the prefix sums of both even and odd indices. Then, for each element in the array, we can simulate the removal and check if the sum of remaining elements in even and odd indices is equal. If so, we increment the count of valid removals.

## Approach

1. Calculate the length of the DP arrays for storing prefix sums for even and odd indices.
2. Initialize arrays `dpPairs` and `dpOdds` to store the prefix sums of even and odd indexed elements, respectively.
3. Iterate through the input array to fill `dpPairs` and `dpOdds` arrays with prefix sums.
4. Iterate through the input array again and simulate the removal of each element. Check if after removal, the sums of remaining elements in even and odd indices are equal. If so, increment the `result` count.
5. Return the final `result`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input array. We iterate through the array twice, each time with a linear time complexity operation.

- Space complexity: `O(n)`, as we use additional space to store the prefix sums in two arrays of sizes proportional to the length of the input array.

## Code

```java
class Solution {
    public int waysToMakeFair(int[] nums) {
        int dpLengthPairs = nums.length % 2 == 0 ? nums.length / 2 : nums.length / 2 + 1;
        int dpLengthOdds = nums.length / 2;

        int[] dpPairs = new int[dpLengthPairs + 1];
        int[] dpOdds = new int[dpLengthOdds + 1];
        int index = 1;
        for (int i = 0; i < nums.length; i++) {
            if (i % 2 == 0) dpPairs[index] = dpPairs[index - 1] + nums[i];
            else {
                dpOdds[index] = dpOdds[index - 1] + nums[i];
                index++;
            }
        }

        int result = 0;
        index = 1;
        for (int i = 0; i < nums.length; i++) {
            int pairSum = dpPairs[dpLengthPairs];
            int oddSum = dpOdds[dpLengthOdds];
            if (i % 2 == 0) {
                pairSum = pairSum - dpPairs[index] + dpOdds[index - 1];
                oddSum = oddSum - dpOdds[index - 1] - nums[i] + dpPairs[index];
            } else {
                oddSum = oddSum - dpOdds[index] + dpPairs[index];
                pairSum = pairSum - dpPairs[index] - nums[i] + dpOdds[index];
                index++;
            }

            if (pairSum == oddSum) result++;
        }

        return result;
    }
}
```
