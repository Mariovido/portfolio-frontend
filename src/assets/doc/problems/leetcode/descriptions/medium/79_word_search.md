# 79. Word Search

## Description

Given an `m \times n` grid of characters `board` and a string `word`, this problem involves determining whether the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Function

```java
public boolean exist(char[][] board, String word) {}
```

## Input Format

- The grid `board` represented as a `2D` array of characters.
- The string `word` to search for in the grid.

## Output Format

- `true` if the word exists in the grid, `false` otherwise.

## Constraints

- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` and `word` consist of only lowercase and uppercase English letters.

## Follow-up

- Could you use search pruning to make your solution faster with a larger `board`?

## Example

```bash
# Sample Input
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

# Sample Output
true
```
