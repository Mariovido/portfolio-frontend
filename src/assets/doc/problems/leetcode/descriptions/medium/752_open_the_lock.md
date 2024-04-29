# 752. Open the Lock

## Description

This problem involves determining the fewest number of moves needed to open a lock by turning its `4` wheels, each labeled from `0` to `9`. Starting from `0000`, the goal is to reach a target combination without hitting any "deadend" states which disable the lock.

## Function

```java
public int openLock(String[] deadends, String target) {}
```

## Input Format

- First input: an array of strings `deadends` representing combinations that cause the lock to freeze.
- Second input: a string `target` representing the desired combination to unlock the lock.

## Output Format

- An integer representing the minimum number of moves required to open the lock, or `-1` if it's impossible to open.

## Constraints

- `1 <= deadends.length <= 500`
- Each string in deadends and the target string are exactly `4` characters long, made up of digits `0` through `9`.
- The target combination is not listed in the deadends.

## Example

```bash
# Sample Input
deadends = ["0201","0101","0102","1212","2002"]
target = "0202"

# Sample Output
6
```
