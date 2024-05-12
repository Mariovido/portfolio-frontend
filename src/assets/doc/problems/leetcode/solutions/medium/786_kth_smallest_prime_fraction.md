# 786. K-th Smallest Prime Fraction

## Intuition

To solve the problem of finding the `k^{th}` smallest prime fraction from a sorted array of prime numbers, we must consider each possible fraction and find the `k^{th}` smallest efficiently. Given that the array is sorted, a direct comparison of all possible fractions would be inefficient. Instead, leveraging a binary search strategy can help optimize this process. The main idea is to use binary search on the values of the fractions themselves, not directly on the array elements.

## Approach

1. **Initialize boundaries**: Set the initial search range for the possible values of fractions between `0.0` and `1.0`.
2. **Binary Search**: Perform a binary search on the fraction value `mid` between `low` and `high`.
3. **Count and Track Fractions**:
   - For each fraction represented as `arr[i] / arr[j]` where `i < j`:
     - Increment `j` until the fraction is smaller than or equal to `mid`.
     - Count all valid fractions greater than `mid` for each `i`.
     - Track the largest fraction less than or equal to `mid` using the variables `numerator` and `denominator`.
4. **Determine the next search range**:
   - If the count of fractions less than `mid` is less than `k`, move the lower bound `low` up to `mid`.
   - If the count is greater, adjust the upper bound `high` down to `mid`.
5. **Stopping condition**: If the count matches `k`, return the fraction corresponding to `numerator` and `denominator`.

## Complexity

- Time complexity: `O(n * log(m))`, where `n` is the number of elements in the array, and `m` represents the precision or the number of iterations needed in the binary search until the bounds are sufficiently close.

- Space complexity: `O(1)`, as the algorithm only requires a constant amount of extra space for variables used in tracking and counting, irrespective of the input size.

## Code

```java
class Solution {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        double low = 0.0;
        double high = 1.0;
        int[] result = new int[2];

        while (low < high) {
            double mid = low + (high - low) / 2;
            int count = 0;
            int j = 1;
            int numerator = 0;
            int denominator = 1;

            for (int i = 0; i < arr.length - 1; i++) {
                while (j < arr.length && arr[i] > mid * arr[j]) {
                    j++;
                }

                count += arr.length - j;
                if (j < arr.length && arr[i] * denominator > numerator * arr[j]) {
                    numerator = arr[i];
                    denominator = arr[j];
                }
            }

            if (count == k) return new int[]{numerator, denominator};
            else if (count < k) low = mid;
            else high = mid;
        }

        return result;
    }
}
```
