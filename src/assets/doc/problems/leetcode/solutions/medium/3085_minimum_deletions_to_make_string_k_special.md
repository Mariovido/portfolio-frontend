# 3085. Minimum Deletions to Make String K-Special

## Intuition

The goal is to minimize the number of deletions required in a string so that the difference between the highest and lowest non-zero character frequencies is at most `k`. The solution involves simulating different target frequencies and calculating the number of deletions needed to bring all character frequencies within the allowed range.

## Approach

1. Count the frequency of each character in the input string using a `size-26` array.
2. Try all possible target frequencies from `1` to the length of the word.
3. For each target frequency:
   1. If a character frequency is less than the target, delete all occurrences.
   2. If it's greater than `target + k`, delete the excess to bring it down to `target + k`.
   3. Otherwise, no deletion is needed.
4. Track the minimum deletions required over all target frequencies.
5. Return the minimum value found.

## Complexity

- Time complexity: `O(n * 26)`, where `n` is the length of the word. This is because we iterate through `n` possible target values and evaluate all `26` letters for each.

- Space complexity: `O(1)`, as the frequency array is fixed at `26` elements regardless of input size.

## Code

```java
class Solution {
    public int minimumDeletions(String word, int k) {
        int[] freq = new int[26];
        for (char c : word.toCharArray()) {
            freq[c - 'a']++;
        }

        int res = Integer.MAX_VALUE;

        for (int target = 1; target <= word.length(); target++) {
            int deletions = 0;
            for (int f : freq) {
                if (f == 0)
                    continue;
                if (f < target) {
                    deletions += f;
                } else if (f > target + k) {
                    deletions += f - (target + k);
                }
            }
            res = Math.min(res, deletions);
        }

        return res;
    }
}
```
