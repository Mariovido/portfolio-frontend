# 2373. Largest Local Values in a Matrix

## Intuition

Given a grid, the objective is to compute a smaller grid where each cell in the resulting grid contains the maximum value from a `3 * 3` sub-grid centered around the corresponding cell in the original grid. Intuitively, this involves iterating over each possible `3 * 3` sub-grid in the original matrix, extracting the maximum value from these sub-grids, and storing these maximums in a new matrix.

## Approach

1. Determine the size of the original grid `n`.
2. Initialize a new grid `maxLocal` with dimensions `(n - 2) * (n - 2)` to store the maximum values. The reduction in size accounts for the inability to form a full `3 * 3` sub-grid around the cells at the borders of the original grid.
3. Loop through the original grid from `i = 1` to `n - 2` and from `j = 1` to `n - 2`. These indices allow us to focus on the central part of the grid where a full `3 * 3` sub-grid can be formed.
4. For each position `(i, j)` in the new `maxLocal` grid, compute the maximum value in the `3 * 3` sub-grid of the original grid centered at `(i, j)`. This involves checking the values from `(i - 1, j - 1)` to `(i + 1, j + 1)` in the original grid.
5. Update the corresponding cell in the `maxLocal` grid with this maximum value.
6. Continue this process until all positions in the `maxLocal` grid are filled.
7. Return the `maxLocal` grid.

## Complexity

- Time complexity: `O(n^2)`, because for each of the approximately `(n - 2) * (n - 2)` elements in the `maxLocal` grid, we perform a constant amount of work examining `9` cells. Thus, the work done is proportional to the number of elements in the `maxLocal` grid, which approaches `n^2` for large `n`.

- Space complexity: `O(n^2)` for storing the `maxLocal` grid. The input grid's space is not considered additional since it is given, and no extra space besides the output grid is used that scales with the size of the input.

## Code

```java
class Solution {
    public int[][] largestLocal(int[][] grid) {
        int n = grid.length;
        int[][] maxLocal = new int[n - 2][n - 2];

        for (int i = 1; i <= n - 2; i++) {
            for (int j = 1; j <= n - 2; j++) {
                int max = Integer.MIN_VALUE;

                for (int k = i - 1; k <= i + 1; k++) {
                    for (int l = j - 1; l <= j + 1; l++) {
                        max = Math.max(max, grid[k][l]);
                    }
                }

                maxLocal[i - 1][j - 1] = max;
            }
        }

        return maxLocal;
    }
}
```
