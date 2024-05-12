# Count Luck

## Description

Ron and Hermione are lost in the Forbidden Forest, trying to find their way out to a portkey that will take them back to Hogwarts. They are in an `N * M` grid, where each cell is either empty or blocked by a tree. Ron guesses how many times Hermione will use her wand, which indicates the direction they should go. Ron's challenge is to determine if his guesses are correct based on Hermione's path.

## Function

```java
public static String countLuck(List<String> matrix, int k) {}
```

## Input Format

- The first line: an integer `t`, the number of test cases.
- For each test case:
  - The first line contains two space-separated integers `n` and `m`, the number of forest matrix rows and columns.
  - Each of the next `n` lines contains a string of length `m` describing a row of the forest matrix.
  - The last line contains an integer `k`, Ron's guess on how many times Hermione will wave her wand.

## Output Format

- For each test case, print `Impressed` if Ron's guess matches Hermione's path, or `Oops!` otherwise.

## Constraints

- `0 <= t <= 10`
- `1 <= n, m <= 100`
- `0 <= k <= 10000`
- There is exactly one `M` (starting point) and one `*` (portkey) in the forest.
- Exactly one path exists between `M` and `*`.

## Example

```bash
# Sample Input
3
2 3
*.M
.X.
1
4 11
.X.X......X
.X*.X.XXX.X
.XX.X.XM...
......XXXX.
3
4 11
.X.X......X
.X*.X.XXX.X
.XX.X.XM...
......XXXX.
4

# Sample Output
Impressed
Impressed
Oops!
```
