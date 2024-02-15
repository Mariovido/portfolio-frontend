# Climbing the Leaderboard

## Description

In this problem, the objective is to track the player's ranking on a leaderboard based on Dense Ranking. The player with the highest score is ranked `1`, and players with equal scores share the same ranking number, with the next player(s) receiving the following ranking number. The task is to determine the player's ranking after each game.

## Function

```java
public static List<Integer> climbingLeaderboard(List<Integer> ranked, List<Integer> player) {}
```

## Input Format

- The first line: an integer `n`, the number of players on the leaderboard.
- The second line: `n` space-separated integers `ranked[i]`, the leaderboard scores in decreasing order.
- The third line: an integer `m`, the number of games the player plays.
- The fourth line: `m` space-separated integers `player[j]`, the game scores.

## Output Format

- A list of integers representing the player's rank after each new score.

## Constraints

- `1 <= n <= 2 * 10^5`
- `1 <= m <= 2 * 10^5`
- `0 <= ranked[i] <= 10^9` for `0 <= i < n`
- `0 <= player[j] <= 10^9` for `0 <= j < m`
- The existing leaderboard `ranked` is in descending order.
- The player's scores `player` are in ascending order.

## Subtask

- For `60%` of the maximum score:
  - `1 <= n <= 200`
  - `1 <= m <= 200`

## Example

```bash
# Sample Input
7
100 100 50 40 40 20 10
4
5 25 50 120

# Sample Output
6
4
2
1
```
