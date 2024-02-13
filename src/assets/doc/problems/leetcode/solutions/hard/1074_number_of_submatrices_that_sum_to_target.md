# 1074. Number of Submatrices That Sum to Target

## Intuition

The problem involves finding the number of submatrices within a given matrix whose sum equals a target value. One intuitive approach could involve iterating through all possible submatrices and calculating their sums. However, this would be inefficient. Instead, we can utilize prefix sum techniques to optimize the process.

## Approach

1. Compute the prefix sums for each row of the `matrix`. This step helps in efficiently calculating the sum of any subarray within a row.
2. Iterate through all possible pairs of columns `(i, j)` and use the prefix sum technique to find the sum of submatrices formed by these columns.
3. Use a hashmap to store the frequency of prefix sums encountered. For each row, calculate the cumulative sum from column `i` to column `j` and check if the difference between the current sum and the target exists in the hashmap. If it does, increment the result by the corresponding frequency.
4. Update the hashmap with the current cumulative sum's frequency.
5. Repeat steps `2`-`4` for all pairs of columns.
6. Return the final result.

## Complexity

- Time complexity: `O(n^2 * m)`, where `n` is the number of rows and `m` is the number of columns in the matrix. The nested loops iterate through all possible submatrices, and calculating prefix sums takes `O(m)` time.

- Space complexity: `O(n * m)` for storing the prefix sums and hashmap.

## Code

```java
class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        int n = matrix.length;
        int m = matrix[0].length;

        for(int i = 0; i < n; i++) {
            for(int j = 1; j < m; j++) {
                matrix[i][j] += matrix[i][j-1];
            }
        }

        int res = 0;
        for(int i = 0; i < m; i++) {
            for(int j = i; j < m; j++) {
                Map<Integer, Integer> map = new HashMap<>();
                map.put(0, 1);

                int currSum = 0;
                for(int k = 0; k < n; k++) {
                    currSum += matrix[k][j] - (i - 1 >= 0 ? matrix[k][i-1] : 0);
                    res += map.getOrDefault(currSum-target, 0);
                    map.put(currSum, map.getOrDefault(currSum, 0) + 1);
                }
            }
        }
        return res;
    }
}
```
