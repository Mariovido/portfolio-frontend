# 948. Bag of Tokens

## Description

You start with an initial power and score and have a bag of tokens, each with a value. The goal is to maximize the total score by playing these tokens strategically. Each token can be played face-up or face-down, with different consequences for power and score. This problem seeks to determine the maximum possible score achievable after playing any number of tokens.

## Function

```java
public int bagOfTokensScore(int[] tokens, int power) {}
```

## Input Format

- `tokens`: An integer array representing the values of tokens &rarr; `0 <= tokens.length <= 1000`, `0 <= tokens[i] < 10^4`.
- `power`: An integer representing the initial power &rarr; `0 <= power < 10^4`.

## Output Format

- An integer representing the maximum possible score achievable.

## Constraints

- `0 <= tokens.length <= 1000`
- `0 <= tokens[i] < 10^4`
- `0 <= power < 10^4`

## Example

```bash
# Sample Input
tokens = [100], power = 50

# Sample Output
0
```
