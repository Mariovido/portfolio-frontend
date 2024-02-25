# 2709. Greatest Common Divisor Traversal

## Intuition

The problem appears to involve traversing pairs of integers in an array based on certain conditions. The preprocessing step seems to involve identifying prime factors of the integers in the array and mapping them to their indices, possibly to optimize traversal.

## Approach

1. **Preprocessing**: Iterate through the array, factorizing each integer into its prime factors and mapping those factors to their respective indices.
2. **Depth-First Search (DFS)**: Start DFS traversal from index `0`. Mark visited indices and prime factors during traversal to ensure all pairs can be traversed.
3. **Check Visited Indices**: After DFS, check if all indices have been visited. If yes, return true; otherwise, return false.

## Complexity

- Time complexity: `O(N \sqrt{M})` where `N` is the number of elements in the array and `M` is the maximum value in the array.

- Space complexity: `O(N + M)`
  - `O(N)` for storing prime factors to indices mappings.
  - `O(N)` for visited index array.
  - `O(M)` for visited prime factors map.

## Code

```java
class Solution {
    Map<Integer, List<Integer>> primeToIndex;
    Map<Integer, List<Integer>> indexToPrime;

    public boolean canTraverseAllPairs(int[] nums) {
        primeToIndex = new HashMap<>();
        indexToPrime = new HashMap<>();

        preprocess(nums);

        boolean[] visitedIndex = new boolean[nums.length];
        Map<Integer, Boolean> visitedPrime = new HashMap<>();

        dfs(0, visitedIndex, visitedPrime);

        return allIndicesVisited(visitedIndex);
    }

    private void preprocess(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            int temp = nums[i];

            for (int j = 2; j * j <= nums[i]; j++) {
                if (temp % j == 0) {
                    primeToIndex.computeIfAbsent(j, k -> new ArrayList<>()).add(i);
                    indexToPrime.computeIfAbsent(i, k -> new ArrayList<>()).add(j);
                    while (temp % j == 0)
                        temp /= j;
                }
            }

            if (temp > 1) {
                primeToIndex.computeIfAbsent(temp, k -> new ArrayList<>()).add(i);
                indexToPrime.computeIfAbsent(i, k -> new ArrayList<>()).add(temp);
            }
        }
    }

    private void dfs(int index, boolean[] visitedIndex, Map<Integer, Boolean> visitedPrime) {
        if (visitedIndex[index]) return;

        visitedIndex[index] = true;

        for (int prime : indexToPrime.getOrDefault(index, Collections.emptyList())) {
            if (visitedPrime.getOrDefault(prime, false)) continue;

            visitedPrime.put(prime, true);
            for (int nextIndex : primeToIndex.get(prime)) {
                if (visitedIndex[nextIndex]) continue;

                dfs(nextIndex, visitedIndex, visitedPrime);
            }
        }
    }

    private boolean allIndicesVisited(boolean[] visitedIndex) {
        for (boolean visited : visitedIndex) {
            if (!visited) return false;
        }

        return true;
    }
}
```
