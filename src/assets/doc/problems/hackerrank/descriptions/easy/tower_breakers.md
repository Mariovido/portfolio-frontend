# Tower Breakers

## Description

In the Tower Breakers game, two players play optimally to reduce towers' heights. Each turn, a player can choose a tower and decrease its height, following specific rules. Determine the winner based on the given number of towers and their initial height.

## Function

```java
public static int towerBreakers(int n, int m) {}
```

## Input Format

- The first line: a single integer `t`, the number of test cases.
- Each of the next `t` lines: `2` space-separated integers, `n` and `m`.

## Output Format

- An integer, the winner of the game (`1` or `2`).

## Constraints

- `1 <= t <= 100`
- `1 <= n, m <= 10^6`

## Example

```bash
# Sample Input
2
2 2
1 4

# Sample Output
2
1
```
