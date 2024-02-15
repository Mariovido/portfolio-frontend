# Flipping the Matrix

## Intuition

The problem seems to involve flipping a square matrix along its horizontal and vertical axes and maximizing the sum of elements in the resulting matrix. One intuitive approach could involve iterating over each cell of the matrix and selecting the maximum element among the corresponding elements after flipping.

## Approach

1. Iterate over the upper-left quadrant of the `matrix`, where the rows and columns indices are both less than half the size of the `matrix`.
2. For each cell at position `(i, j)`, calculate the corresponding cell after flipping along both horizontal and vertical axes: `(i, j)`, `(i, size - 1 - j)`, `(size - 1 - i, j)`, and `(size - 1 - i, size - 1 - j)`.
3. Select the maximum element among these four cells and add it to the maximum sum.
4. Return the maximum sum after iterating over all cells in the upper-left quadrant.

## Complexity

- Time complexity: `O(n^2)`, where `n` is the size of the matrix. We iterate over each cell in the upper-left quadrant of the matrix.

- Space complexity: `O(1)`, as we only use a constant amount of extra space for variables regardless of the size of the input matrix.

## Code

```java
class Result {
    public static int flippingMatrix(List<List<Integer>> matrix) {
        int maxSum = 0;
        int size = matrix.size();

        for (int i = 0; i < matrix.size() / 2; i++) {
            for (int j = 0; j < matrix.size() / 2; j++) {
                maxSum += Math.max(matrix.get(i).get(j),
                    Math.max(matrix.get(i).get(size - 1 - j),
                    Math.max(matrix.get(size - 1 - i).get(j),
                        matrix.get(size - 1 - i).get(size - 1 - j)))
                    );
            }
        }

        return maxSum;
    }
}
```
