# 268. Missing Number

## Intuition

To find the missing number in an array, we can calculate the `sum` of all numbers from `0` to `n`, where `n` is the length of the array. Then, by subtracting the `sum` of the given array from the `sum` of the expected sequence, we can find the missing number.

## Approach

1. Calculate the expected `sum` of numbers from `0` to `n` using the formula: `sum = n * (n + 1) / 2`.
2. Iterate through the given array.
3. Subtract each element of the array from the calculated `sum`.
4. The remaining value after the subtraction will be the missing number.

## Complexity

- Time complexity: `O(n)` - We iterate through the array once to calculate the sum.

- Space complexity: `O(1)` - We use only a constant amount of extra space for storing variables regardless of the size of the input array.

## Code

```java
class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;

        int sum = (n * (n + 1)) / 2;
        for (int num : nums) {
            sum -= num;
        }

        return sum;
    }
}
```
