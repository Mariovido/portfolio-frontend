# Counter game

## Description

In this problem, Louise and Richard play a numbers game where they choose a number, check if it's a power of `2`, and take specific actions accordingly. Louise starts the game, and the first person to reduce the number to `1` wins.

## Function

```java
public static String counterGame(long n) {}
```

## Input Format

- The first line: an integer `t`, the number of test cases &rarr; `1 <= t <= 10`.
- Each of the next `t` lines contains an integer `n`, the initial value for each game &rarr; `1 <= n <= 2^{64 - 1}`.

## Output Format

- A string: either `Richard` or `Louise` representing the winner

## Constraints

- `1 <= t <= 10`
- `1 <= n <= 2^{64 - 1}`

## Example

```bash
# Sample Input
1
6

# Sample Output
Richard
```
