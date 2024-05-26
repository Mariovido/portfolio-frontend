# 2597. The Number of Beautiful Subsets

## Intuition

The problem requires us to find subsets of an array where the absolute difference between any two elements in the subset is not equal to a given value (`k`). My initial thought was to generate all possible subsets of the array and then filter out the ones that do not meet the condition.

## Approach

1. **Generate All Subsets**: Use a recursive function to generate all possible subsets of the input array. Each element can either be included in the current subset or not, leading to (`2^{n}`) possible subsets for an array of length (`n`).
2. **Filter Beautiful Subsets**: For each subset, check if it is "beautiful". A subset is considered beautiful if no two elements have an absolute difference equal to (`k`).
3. **Count Beautiful Subsets**: Count the number of subsets that satisfy the beautiful condition.

Here are the detailed steps:

1. **Generate Subsets**:
   - Use a recursive function to explore both inclusion and exclusion of each element.
   - Base case: If all elements have been considered, add the current subset to the list of subsets.
2. **Check for Beautiful Subsets**:
   - Iterate over all pairs of elements in a subset and check their absolute difference.
   - If any pair has a difference of (`k`), the subset is not beautiful.
3. **Count and Return**:
   - Count the number of subsets that are beautiful and return this count.

## Complexity

- Time complexity: `O(n^2 * 2^{n})`

  - Generating all subsets takes `O(2^{n})` where `n` is the length of the input array.
  - Checking if a subset is beautiful involves checking all pairs in the subset. In the worst case, for each subset, this takes `O(n^{2})`.

- Space complexity: `O(2^{n})`
  - The space required to store all subsets is `O(2^{n})`.
  - The recursive calls for generating subsets use `O(n)` space on the call stack.

## Code

```java
class Solution {
    public int beautifulSubsets(int[] nums, int k) {
        List<List<Integer>> subsets = new ArrayList<>();

        generateSubsets(nums, 0, new ArrayList<>(), subsets);

        int count = 0;
        for (List<Integer> subset : subsets) {
            if (isBeautiful(subset, k)) count++;
        }

        return count;
    }

    private void generateSubsets(int[] nums, int index, List<Integer> current, List<List<Integer>> subsets) {
        if (index == nums.length) {
            if (!current.isEmpty()) subsets.add(new ArrayList<>(current));

            return;
        }

        generateSubsets(nums, index + 1, current, subsets);
        current.add(nums[index]);

        generateSubsets(nums, index + 1, current, subsets);
        current.remove(current.size() - 1);
    }

    private boolean isBeautiful(List<Integer> subset, int k) {
        for (int i = 0; i < subset.size(); i++) {
            for (int j = i + 1; j < subset.size(); j++) {
                if (Math.abs(subset.get(i) - subset.get(j)) == k) return false;
            }
        }

        return true;
    }
}
```
