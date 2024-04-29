# 1137. N-th Tribonacci Number

## Intuition

The problem involves computing the `n^{th}` number in the Tribonacci sequence, where each number is the sum of the previous three numbers in the sequence, starting from `0`, `1`, and `1`. Given that this sequence builds similarly to the Fibonacci sequence but includes an additional preceding term, my first thought is to use dynamic programming to store previously computed values to avoid redundant calculations.

## Approach

1. **Base Cases Handling:** If `n` is `0`, directly return `0`. If `n` is `1` or `2`, return `1`, since these are the initial terms of the Tribonacci sequence defined by the problem.
2. **Initialization of the Array:** Create an array `trib` of size `n+1` to store Tribonacci values up to the n-th term. Initialize `trib[0]` to `0`, `trib[1]`, and `trib[2]` to `1` based on the sequence definition.
3. **Iterative Computation:** For each index from `3` to `n`, calculate the value of `trib[i]` as the sum of the three preceding values (`trib[i-3]`, `trib[i-2]`, `trib[i-1]`).
4. **Return the Result:** Once the loop completes, the `n^{th}` Tribonacci number will be stored in `trib[n]`. Return this value.

## Complexity

- Time complexity: `O(n)` because we compute each term of the Tribonacci sequence exactly once up to the `n^{th}` term.

- Space complexity: `O(n)` due to the storage required for the array `trib` that holds the computed values up to the `n^{th}` term.

## Code

```java
class Solution {
    public int tribonacci(int n) {
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;

        int[] trib = new int[n + 1];
        trib[0] = 0;
        trib[1] = 1;
        trib[2] = 1;

        for (int i = 3; i <= n; i++) {
            trib[i] = trib[i - 3] + trib[i - 2] + trib[i - 1];
        }

        return trib[n];
    }
}
```
