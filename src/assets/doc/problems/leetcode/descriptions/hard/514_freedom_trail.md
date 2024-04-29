# 514. Freedom Trail

## Description

In the video game Fallout 4, the `Road to Freedom` quest requires players to reach a metal dial called the `Freedom Trail Ring` and use it to spell a specific keyword to open the door. This problem mimics that scenario by asking for the minimum number of steps to spell all the characters in a keyword using the ring.

## Function

```java
public int findRotateSteps(String ring, String key) {}
```

## Input Format

- The first parameter: a string `ring` representing the code engraved on the outer ring.
- The second parameter: a string `key` representing the keyword to be spelled.

## Output Format

- An integer representing the minimum number of steps to spell all the characters in the keyword.

## Constraints

- `1 <= ring.length, key.length <= 100`
- `ring` and `key` consist of only lowercase English letters.
- It is guaranteed that `key` could always be spelled by rotating `ring`.

## Example

```bash
# Sample Input
ring = "godding", key = "gd"

# Sample Output
4
```
