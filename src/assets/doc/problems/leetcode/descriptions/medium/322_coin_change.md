# 322. Coin Change

## Description

Given an array of coin denominations and a target amount, this problem involves finding the fewest number of coins needed to make up that amount. If it's impossible to make up the amount with the given coins, return `-1`.

## Function

```java
public int coinChange(int[] coins, int amount) {}
```

## Input Format

- An array of coin denominations, `coins`.
- An integer representing the target amount, `amount`.

## Output Format

- An integer representing the fewest number of coins needed to make up the amount. Return `-1` if not possible.

## Constraints

- `1 <= coins.length <= 12`
- `1 <= coins[i] <= 2^31 - 1`
- `0 <= amount <= 10^4`

## Example

```bash
# Sample Input
int[] coins1 = {1, 2, 5};
int amount1 = 11;

# Sample Output
3
```
