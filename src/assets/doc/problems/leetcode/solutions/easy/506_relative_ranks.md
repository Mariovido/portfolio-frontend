# 506. Relative Ranks

## Intuition

The problem requires assigning a rank to each score in an array, where the highest score gets a "Gold Medal", the second highest a "Silver Medal", the third highest a "Bronze Medal", and the rest are ranked according to their position in descending order of their scores. The initial thought is to sort the scores while keeping track of their original indices.

## Approach

1. **Extract Indices and Scores:** Create an array of pairs where each pair contains the original index of a score and the score itself.
2. **Sort Scores:** Sort the array of pairs based on the scores in descending order. This helps in assigning the ranks directly based on the sorted order.
3. **Assign Ranks:** Iterate over the sorted list:
   - Assign "Gold Medal" to the highest score.
   - Assign "Silver Medal" to the second highest score.
   - Assign "Bronze Medal" to the third highest score.
   - For all other scores, assign their ordinal rank (`1`-based index).
4. **Output Results:** Populate the results array using the original indices to place the ranks correctly.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the array takes `O(n * log(n))`.
  - Iterating through the array to assign ranks takes `O(n)`.

- Space complexity: `O(n)`
  - Additional space is used for the sorted pairs array and the result array, both of size `n`.

## Code

```java
class Solution {
    public String[] findRelativeRanks(int[] score) {
        int n = score.length;

        int[][] sortedPairs = new int[n][2];
        for (int i = 0 ; i < n ; i++) {
            sortedPairs[i] = new int[] {i, score[i]};
        }

        Arrays.sort(sortedPairs, (x, y) -> (y[1] - x[1]));

        String[] ans = new String[n];

        for (int i = 0 ; i < n ; i++) {
            if (i == 0) ans[sortedPairs[i][0]] = "Gold Medal";
            else if (i == 1) ans[sortedPairs[i][0]] = "Silver Medal";
            else if (i == 2) ans[sortedPairs[i][0]] = "Bronze Medal";
            else ans[sortedPairs[i][0]] = String.valueOf(i+1);
        }

        return ans;
    }
}
```
