# 1208. Get Equal Substrings Within Budget

## Intuition

To solve this problem, the goal is to find the maximum length of a substring where the sum of the differences between corresponding characters in two given strings is less than or equal to a given `maxCost`. The intuitive approach involves using the sliding window technique to efficiently manage the sum of differences within the allowed `maxCost`.

## Approach

1. **Calculate Costs:** Compute the absolute differences between corresponding characters of the two strings and store them in an array called `cost`.
2. **Initialize Variables:** Initialize variables to keep track of the maximum length of a valid substring (`maxLength`), the start of the sliding window (`start`), and the current total cost of the window (`currentCost`).
3. **Sliding Window Technique:** Iterate through the string using a sliding window:
   - Add the cost of the current character to `currentCost`.
   - If `currentCost` exceeds `maxCost`, move the start of the window to the right until `currentCost` is within `maxCost`.
   - Update `maxLength` with the maximum length of the valid window found so far.
4. **Return Result:** After processing all characters, return `maxLength` as the result.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input strings. This is because we pass through the strings a constant number of times (two linear passes).

- Space complexity: `O(n)` due to the additional space needed to store the `cost` array, which is of the same length as the input strings.

## Code

```java
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int n = s.length();
        int[] cost = new int[n];

        for (int i = 0; i < n; i++) {
            cost[i] = Math.abs(s.charAt(i) - t.charAt(i));
        }

        int maxLength = 0, start = 0, currentCost = 0;

        for (int end = 0; end < n; end++) {
            currentCost += cost[end];

            while (currentCost > maxCost) {
                currentCost -= cost[start];
                start++;
            }

            maxLength = Math.max(maxLength, end - start + 1);
        }

        return maxLength;
    }
}
```
