# 402. Remove K Digits

## Description

Given a string representing a non-negative integer `num` and an integer `k`, the task is to remove `k` digits from `num` to form the smallest possible integer. The resulting integer must not contain leading zeroes.

## Function

```java
public String removeKdigits(String num, int k) {}
```

## Input Format

- A string `num` representing a non-negative integer.
- An integer `k` representing the number of digits to remove.

## Output Format

- A string representing the smallest possible integer after removing `k` digits.

## Constraints

- `1 <= k <= num.length <= 10^5`
- `num` consists of only digits.
- `num` does not have any leading zeros except for the zero itself.

## Example

```bash
# Sample Input
num = "1432219", k = 3

# Sample Output
"1219"
```
