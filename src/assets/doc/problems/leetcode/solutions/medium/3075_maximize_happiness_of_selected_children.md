# 3075. Maximize Happiness of Selected Children

## Intuition

When first approaching the problem of finding the maximum happiness sum given an array of integers and a value `k`, my immediate thought is to maximize the sum of the `k` largest values after adjusting them by a decrementing factor. Since each of the top `k` elements are potentially reduced by an increasing amount as we count downwards, the problem hints towards needing a sort to efficiently select the top elements and a simple arithmetic operation to adjust and sum these values.

## Approach

1. **Sort the Array**: Begin by sorting the array `happiness`. This helps in easily accessing the top `k` largest values.
2. **Initialize Variables**: We have `res` for storing the result, and `j` which is used to keep track of how much we should decrease each of the `k` largest numbers.
3. **Adjust and Sum the Top k Elements**: Loop through the last `k` elements of the sorted array (which are the `k` largest due to the sorting):
   - Adjust each element by subtracting `j`, which increments with each iteration, ensuring the largest deduction is applied to the smallest of the top `k` elements.
   - Ensure that no adjusted value drops below zero using `Math.max`.
   - Accumulate the adjusted values into `res`.
4. **Return Result**: After adjusting and summing up the `k` values, return the accumulated result.

## Complexity

- Time complexity: `O(n * log(n))` due to the sorting of the array. The subsequent loop to adjust and sum the top `k` elements only adds a linear `O(k)` term, which is dominated by the sorting step.

- Space complexity: `O(1)` if we disregard the input and output space. Since no additional data structures that scale with input size are used (aside from internal mechanisms in the `Arrays.sort()` method), the space usage remains constant.

## Code

```java
class Solution {
    public long maximumHappinessSum(int[] happiness, int k) {
        long res = 0;
        int n = happiness.length;
        int j = 0;

        Arrays.sort(happiness);

        for (int i = n - 1; i >= n - k; --i) {
            happiness[i] = Math.max(happiness[i] - j++, 0);
            res += happiness[i];
        }

        return res;
    }
}
```
