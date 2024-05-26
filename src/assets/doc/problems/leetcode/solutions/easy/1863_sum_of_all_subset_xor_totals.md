# 1863. Sum of All Subset XOR Totals

## Intuition

The problem requires calculating the sum of `XORs` of all possible subsets of a given array. My first thought is to use a recursive approach, which allows us to explore each subset by including or excluding each element. This way, we can cover all possible subsets and calculate their respective `XORs`.

## Approach

1. Define a recursive helper function that takes three parameters: the array `nums`, the current index `index`, and the current `XOR` value `currentXOR`.
2. Base Case: If the `index` is equal to the length of the array, return the `currentXOR` as this represents the `XOR` value for one subset.
3. Recursive Case:
   - Calculate the `XOR` sum if the current element is included in the subset.
   - Calculate the `XOR` sum if the current element is excluded from the subset.
   - Return the sum of both cases, which accumulates the `XOR` sums of all subsets.
4. The main function calls this helper function starting with the initial index `0` and `currentXOR` as `0`.

## Complexity

- Time complexity: `O(2^{n})` because for each element, we have two choices (include or exclude), resulting in a total of `2^{n}` subsets.

- Space complexity: `O(n)` due to the recursive call stack, which can go as deep as the number of elements `n` in the worst case.

## Code

```java
class Solution {
    public int subsetXORSum(int[] nums) {
        return subsetXORSumHelper(nums, 0, 0);
    }

    private int subsetXORSumHelper(int[] nums, int index, int currentXOR) {
        if (index == nums.length) return currentXOR;

        int include = subsetXORSumHelper(nums, index + 1, currentXOR ^ nums[index]);

        int exclude = subsetXORSumHelper(nums, index + 1, currentXOR);

        return include + exclude;
    }
}
```
