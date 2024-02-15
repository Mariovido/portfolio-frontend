# Climbing the Leaderboard

## Intuition

The problem requires us to determine the rank of the player after each game based on their score compared to the existing leaderboard. Since the leaderboard can have duplicate scores, we need to eliminate duplicates and maintain the leaderboard in a sorted order to efficiently determine the player's rank.

## Approach

1. Eliminate duplicate scores from the leaderboard to create a new sorted list of unique scores.
2. Create a queue data structure to store the unique scores in descending order, simulating a leaderboard.
3. Iterate over the player's scores.
4. For each player's score, compare it with the scores in the leaderboard from the top.
5. If the player's score is greater than or equal to the current score in the leaderboard, remove the score from the leaderboard and continue to the next score.
6. If the player's score is smaller than the current score in the leaderboard, the player's rank is the current position of the leaderboard plus one.
7. Append the player's rank to the result list.
8. Return the result list containing the ranks of the player after each game.

## Complexity

- Time complexity: `O(n + m)`

  - Eliminating duplicates from the leaderboard: `O(n)`
  - Iterating over the player's scores: `O(m)`, where `m` is the number of player's scores.

- Space complexity: `O(n + m)`
  - Additional space for storing the new ranked list: `O(n)`
  - Space for the queue: `O(n)`
  - Space for the result list: `O(m)`

## Code

```java
class Result {
    public static List<Integer> climbingLeaderboard(List<Integer> ranked, List<Integer> player) {
        List<Integer> newrankedList = ranked.stream()
            .distinct()
            .collect(Collectors.toList());

        Queue<Integer> rankedQueue = new LinkedList<>();
        for (int i = newrankedList.size() - 1; i >= 0; i--) {
            rankedQueue.add(newrankedList.get(i));
        }

        List<Integer> result = new ArrayList<>();
        for (int score : player){
            while (rankedQueue.size() > 0 && rankedQueue.peek() <= score) {
                rankedQueue.poll();
            }

            if (rankedQueue.size() == 0) result.add(1);
            else result.add(rankedQueue.size() + 1);
        }
        return result;
    }
}
```
