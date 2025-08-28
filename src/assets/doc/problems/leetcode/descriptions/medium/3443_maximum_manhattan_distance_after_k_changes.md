# 3443. Maximum Manhattan Distance After K Changes

## Description

You are given a string `s` of directions (`N`, `S`, `E`, `W`) representing movements on an infinite `2D` grid from the origin `(0, 0)`. You can change at most `k` of these directions into any of the four. Find the maximum Manhattan distance from the origin that can be achieved at any point in the path after making at most `k` changes.

## Function

```java
public int maxDistance(String s, int k) {}
```

## Input Format

- A string s with length between `1` and `10^5`.
- An integer k such that `0 <= k <= s.length`.

## Output Format

- An integer representing the maximum Manhattan distance from the origin at any point after at most k changes.

## Constraints

- `1 <= s.length <= 10^5`
- `0 <= k <= s.length`
- `s` consists only of `N`, `S`, `E`, `W`.

## Example

```bash
# Sample Input
s = "NWSE", k = 1

# Sample Output
3
```
