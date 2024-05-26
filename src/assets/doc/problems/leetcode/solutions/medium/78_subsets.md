# 78. Subsets

## Intuition

The problem of generating all subsets (or power sets) of a given set of integers can be approached using backtracking. This method is intuitive because it systematically explores all possible combinations of the elements by making a series of choices (whether to include each element or not) and backtracking to explore other possibilities. The recursive nature of backtracking is well-suited for this problem, as it allows us to build subsets incrementally and revert changes to try different combinations.

## Approach

1. **Initialization**: Start by initializing an empty list `result` that will store all the subsets.
2. **Recursive Backtracking Function**: Define a helper function `generateSubsets` that takes the current index, the original array, the current subset being constructed, and the result list.
3. **Base Case**: Add the current subset to the result list. This ensures that every possible subset is eventually added.
4. **Recursive Exploration**: Iterate over the elements starting from the current index:
   - **Include Element**: Add the current element to the subset.
   - **Recurse**: Call the recursive function with the next index.
   - **Exclude Element**: Remove the last added element to backtrack and explore subsets without the current element.
5. **Return Result**: After all recursive calls complete, return the result list containing all subsets.

## Complexity

- Time complexity: `O(2^{n} * n)`. This is because there are `2^{n}` subsets for a set of size `n`, and generating each subset takes `O(n)` time on average due to the need to copy elements.

- Space complexity: `O(n)` for the recursion stack and the current subset being constructed. The overall space complexity is `O(2^{n} * n)` if we consider the space needed to store all subsets in the result list.

## Code

```java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        generateSubsets(0, nums, new ArrayList<>(), result);

        return result;
    }

    private void generateSubsets(int index, int[] nums, List<Integer> current, List<List<Integer>> result) {
        result.add(new ArrayList<>(current));

        for (int i = index; i < nums.length; i++) {
            current.add(nums[i]);
            generateSubsets(i + 1, nums, current, result);
            current.remove(current.size() - 1);
        }
    }
}
```
