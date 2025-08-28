# 3443. Maximum Manhattan Distance After K Changes

## Intuition

The problem aims to find the maximum possible Manhattan distance after processing a sequence of directional moves `(N, S, E, W)`, with the allowance to modify up to `k` moves. The core idea is to track net displacement and adjust it optimally using the allowed changes.

## Approach

1. Initialize counters for the four directions (`north`, `south`, `east`, `west`).
2. Iterate through each character in the input string `s`:
   1. Update the respective direction counter based on the move.
3. For each step:
   1. Compute the current horizontal (`x = |east - west|`) and vertical (`y = |north - south|`) displacements.
   2. The Manhattan distance is `x + y`.
   3. Calculate how many steps can be used to increase the distance, up to `2 * k` (since one move can increase by `2` at most).
   4. Ensure the increase doesn’t exceed the remaining "slack" in the current step count.
4. Keep track of the maximum possible Manhattan distance after each iteration and adjustment.
5. Return the maximum value computed.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the string `s`, since we process each move once.

- Space complexity: `O(1)`, using a fixed number of variables regardless of input size.

## Code

```java
class Solution {
    public int maxDistance(String s, int k) {
        int result = 0;

        int north = 0;
        int south = 0;
        int east = 0;
        int west = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (c == 'N') north++;
            else if (c == 'S') south++;
            else if (c == 'E') east++;
            else if (c == 'W') west++;

            int x = Math.abs(east - west);
            int y = Math.abs(north - south);
            int manhattanDistance = x + y;
            int maxIncrease = Math.min(2 * k, (i + 1) - manhattanDistance);

            result = Math.max(result, manhattanDistance + maxIncrease);
        }

        return result;
    }
}
```
