# 506. Relative Ranks

## Description

Given an array of unique scores representing each athlete's performance in a competition, this problem requires assigning a rank to each athlete based on their score. The highest scorer receives a "Gold Medal," the second-highest a "Silver Medal," and the third-highest a "Bronze Medal." Athletes in places fourth and beyond receive a rank corresponding to their placement number.

## Function

```java
public String[] findRelativeRanks(int[] score) {}
```

## Input Format

- An integer `n`, the size of the array `scores`.
- An array of `n` unique integers, where `scores[i]` is the score of the `i^{th}` athlete.

## Output Format

- An array of strings where each element corresponds to the rank of the athlete based on their score.

## Constraints

- `1 <= n <= 10^4`
- `0 <= scores[i] <= 10^6`
- All elements in `scores` are unique.

## Example

```bash
# Sample Input
int[] scores = {5, 4, 3, 2, 1};

# Sample Output
["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
```
