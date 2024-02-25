# 997. Find the Town Judge

## Description

In this problem, we are tasked with identifying the town judge based on trust relationships among the town's people. The town judge is characterized by two key properties: they trust no one, and they are trusted by everyone else. Given `n` people and an array `trust` indicating who trusts whom, we must determine the town judge's label or return `-1` if the judge cannot be identified.

## Function

```java
public int findJudge(int n, int[][] trust) {}
```

## Input Format

- An integer `n`, the number of people in the town.
- A `2D` array trust, where `trust[i] = [a_{i}, b_{i}]` indicates that person `a_{i}` trusts person `b_{i}`.

## Output Format

- Return the label of the town judge if they exist and can be identified, otherwise return `-1`.

## Constraints

- `1 <= n <= 1000`
- `0 <= trust.length <= 10^4`
- `trust[i].length == 2`
- All pairs of trust are unique.
- `a_{i} != b_{i}`
- `1 <= a_{i}, b_{i} <= n`

## Example

```bash
# Sample Input
n = 2, trust = [[1,2]]

# Sample Output
2
```
