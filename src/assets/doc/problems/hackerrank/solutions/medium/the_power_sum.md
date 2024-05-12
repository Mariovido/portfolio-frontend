# The Power Sum

## Intuition

The code appears to be implementing a method to calculate the number of ways a given integer, `X`, can be expressed as the sum of distinct `N^{th}` power integers. This problem seems to involve recursion to explore different combinations of numbers.

## Approach

1. **powerSum Method**:
   - This method serves as a wrapper for the recursive helper function. It initializes the recursion with the given parameters and returns the result.
2. **powerSumHelper Method**:
   - This is a recursive helper method that explores all possible combinations of distinct `N^{th}` power integers that sum up to the given value, remaining.
   - At each step, it subtracts the current number's `N^{th}` power from the remaining value and recursively calls itself with the updated remaining value.
   - It returns `1` if the remaining value becomes `0`, indicating a valid combination is found.
   - If the remaining value becomes negative, it returns `0`, indicating an invalid combination.
   - Otherwise, it recursively calls itself with both the updated remaining value and the next number in the sequence and sums up the results.

## Complexity

- Time complexity: `O(X^{1/N})`, where `X` is the given integer and `N` is the power.

  - This is because the algorithm explores all possible combinations of distinct `N^{th}` power integers that sum up to `X`, which can be up to `X^{1/N}` in the worst case.

- Space complexity: `O(log(X))`, where `X` is the given integer.
  - This is because the recursion depth can be up to `log(X)` in the worst case, as each recursive call explores a different branch of the recursion tree.

## Code

```java
class Result {
    public static int powerSum(int X, int N) {
        return powerSumHelper(X, N, 1);
    }

    private static int powerSumHelper(int remaining, int N, int current) {
        int value = (int) (remaining - Math.pow(current, N));

        if (value == 0) return 1;
        else if (value < 0) return 0;
        else return powerSumHelper(value, N, current + 1) + powerSumHelper(remaining, N, current + 1);
    }
}
```
