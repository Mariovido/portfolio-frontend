# Grid Challenge

## Intuition

The problem likely requires comparing each row of the grid with the next one to check if it's possible to rearrange the characters of each row in non-decreasing order to obtain the next row.

## Approach

1. Iterate through each row of the `grid`.
2. For each `row`, convert it to a character array and sort it.
3. Compare the sorted current `row` with the sorted next `row`.
4. If any character in the current `row` is greater than its corresponding character in the next `row`, return `NO` immediately.
5. If the loop completes without finding any inconsistencies, return `YES`.

## Complexity

- Time complexity: `O(n * m * log(m))`, where `n` is the number of rows and `m` is the length of each row

  - Sorting each row takes `O(m * log(m))` time, where `m` is the length of the row.
  - Comparing each character of adjacent rows takes `O(n * m)` time, where `n` is the number of rows and `m` is the length of each row.

- Space complexity: `O(m)`, where `m` is the maximum length of a row.
  - Sorting each row requires `O(m)` extra space, where `m` is the length of the row.

## Code

```java
class Result {
    public static String gridChallenge(List<String> grid) {
        for (int i = 0; i < grid.size() - 1; i++) {
            String row = grid.get(i);
            char[] arrRow = row.toCharArray();
            Arrays.sort(arrRow);

            String nextRow = grid.get(i + 1);
            char[] arrNextRow = nextRow.toCharArray();
            Arrays.sort(arrNextRow);
            for (int j = 0; j < arrNextRow.length; j++) {
                if (arrRow[j] > arrNextRow[j]) return "NO";
            }
        }

        return "YES";
    }
}
```
