# Diagonal Difference

## Intuition

The problem aims to find the absolute difference between the sums of the diagonals in a square matrix. The intuition here is to traverse the matrix, summing up the elements along both the primary diagonal (from top-left to bottom-right) and the secondary diagonal (from top-right to bottom-left), and then calculating the absolute difference between the two sums.

## Approach

1. Initialize variables to store the sum of elements along the primary diagonal (`leftDiagonalSum`) and the sum of elements along the secondary diagonal (`rightDiagonalSum`).
2. Traverse the matrix. For each element in the matrix:
   - Add the element at position `(i, i)` to `leftDiagonalSum`, where `i` is the current row index.
   - Add the element at position `(i, n - i - 1)` to `rightDiagonalSum`, where `i` is the current row index and `n` is the size of the matrix.
3. Calculate the absolute difference between `leftDiagonalSum` and `rightDiagonalSum`.
4. Return the absolute difference as the result.

## Complexity

- Time complexity: `O(n)`, where `n` is the size of the square matrix. This is because we iterate through the matrix once, visiting each element once.

- Space complexity: `O(1)`, as we use a constant amount of extra space regardless of the size of the input matrix. We only use a few variables to store the sum of diagonals.

## Code

```java
class Result {
    public static int diagonalDifference(List<List<Integer>> arr) {
        int n = arr.size();

        int leftDiagonalSum = 0;
        int rightDiagonalSum = 0;

        for (int i = 0; i < n; i++) {
            leftDiagonalSum += arr.get(i).get(i);
            rightDiagonalSum += arr.get(i).get(n-i-1);
        }

        return Math.abs(leftDiagonalSum - rightDiagonalSum);
    }
}
```
