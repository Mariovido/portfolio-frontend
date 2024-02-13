# Tower Breakers

## Intuition

The problem seems to involve a game played on a grid of towers. The function `towerBreakers` likely determines the outcome of the game based on the dimensions of the grid (`n` rows and `m` columns). The condition `m == 1` seems to be a special case where the outcome is straightforward. The use of modulo operation suggests that the outcome might depend on whether the number of rows is even or odd.

## Approach

- If there's only one column (`m == 1`), the second player wins regardless of the number of rows (`n`). So, return `2` in this case.
- If the number of rows (`n`) is even, the first player can always win by strategically reducing the number of towers in each column to an even number. So, return `2`.
- If the number of rows (`n`) is odd, the first player can always force the second player into a position where there's only one tower left in each column. So, return `1`.

## Complexity

- Time complexity: `O(1)`

- Space complexity: `O(1)`

## Code

```java
class Result {
    public static int towerBreakers(int n, int m) {
        if (m == 1) return 2;
        else return n % 2 == 0 ? 2 : 1;
    }
}
```
