# KnightL on a Chessboard

## Description

Given an `n * n` chessboard and a `KnightL` chess piece that moves in an `L` shape, this problem involves determining the minimum number of moves required for the `KnightL` to reach from position `(0, 0)` to position `(n - 1, n - 1)` for each possible `(a, b)` pair where `1 <= a, b < n`. If it's not possible for the Knight to reach that destination, the answer is `-1`.

## Function

```java
public static List<List<Integer>> knightlOnAChessboard(int n) {}
```

## Input Format

- A single integer denoting `n`, the size of the chessboard &rarr; `5 <= n <= 25`.

## Output Format

- Print exactly `n - 1` lines of output, where each line contains `n - 1` space-separated integers representing the minimum number of moves for each `KnightL(a, b)` pair to reach position `(n - 1, n - 1)`. If some `KnightL(a, b)` cannot reach position `(n - 1, n - 1)`, print `-1` instead.

## Constraints

- `5 <= n <= 25`

## Example

```bash
# Sample Input
5

# Sample Output
4 4 2 8
4 2 4 4
2 4 -1 -1
8 4 -1 1
```
