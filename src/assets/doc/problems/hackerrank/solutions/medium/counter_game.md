# Counter game

## Intuition

The problem seems to involve some form of a game where players take turns, possibly based on some condition related to the binary representation of a number. The `counterGame` function likely computes the winner of this game based on the input number `n`.

## Approach

1. We start by subtracting `1` from the input number `n`.
2. We count the number of set bits (or `1`s) in the binary representation of the resulting number.
3. If the count of set bits is even, Richard wins; otherwise, Louise wins.

## Complexity

- Time complexity: `O(log(n))` (the time complexity of `Long.bitCount(n - 1)`)

- Space complexity: `O(1)` (constant space usage, as we only use a few variables regardless of the input size)

## Code

```java
class Result {
    public static String counterGame(long n) {
        int numberOfOnes = Long.bitCount(n - 1);

        return numberOfOnes % 2 == 0 ? "Richard" : "Louise";
    }
}
```
