# 948. Bag of Tokens

## Intuition

The problem involves maximizing the score by utilizing `tokens` under certain conditions. Sorting the `tokens` allows for efficient processing.

## Approach

1. Sort the `tokens` array.
2. Initialize variables: `score` for counting the score, `left` as the index for the smallest token, and `right` as the index for the largest token.
3. Iterate while `left` is less than or equal to `right`.
4. If the current `power` is enough to purchase the smallest token, purchase it, increment the `score`, and move to the next token.
5. If the current `score` is positive and there are tokens left to exchange, exchange the largest token for power, decrement the `score`, and move to the next token.
6. Break the loop if it's not possible to either purchase or exchange tokens.
7. Return the final `score`.

## Complexity

- Time complexity: `O(n * log(n))`

  - Sorting the tokens takes `O(n * log(n))` time.
  - The while loop iterates through the tokens once, taking `O(n)` time.

- Space complexity: `O(n)`
  - Sorting requires `O(n)` space.
  - Additional space complexity is `O(1)`.

## Code

```java
class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        Arrays.sort(tokens);

        int score = 0;
        int left = 0;
        int right = tokens.length - 1;

        while (left <= right) {
            if (power >= tokens[left]) {
                power -= tokens[left++];
                score++;
            } else if (score > 0 && left != right) {
                power += tokens[right--];
                score--;
            } else break;
        }

        return score;
    }
}
```
