# 881. Boats to Save People

## Description

Given an array of weights of people and the maximum weight limit per boat, the problem involves determining the minimum number of boats required to carry all people while adhering to the weight limit constraint.

## Function

```java
public int numRescueBoats(int[] people, int limit) {}
```

## Input Format

- An array `people` where `people[i]` represents the weight of the `i^{th}` person.
- An integer `limit` representing the maximum weight limit per boat.

## Output Format

- An integer representing the minimum number of boats required.

## Constraints

- `1 <= people.length <= 5 * 10^4`
- `1 <= people[i] <= limit <= 3 * 10^4`

## Example

```bash
# Sample Input
people = [1,2], limit = 3

# Sample Output
1
```
