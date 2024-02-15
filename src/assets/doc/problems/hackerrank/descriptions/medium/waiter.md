# Waiter

## Description

As a waiter at a party, you are tasked with stacking plates based on their divisibility by prime numbers. The algorithm iteratively moves plates between two stacks, one for divisible numbers and the other for non-divisible ones. After the specified number of iterations, the remaining plates are stored in the answers array.

## Function

```java
public static List<Integer> waiter(List<Integer> number, int q) {}
```

## Input Format

- The first line: two space-separated integers, `n` and `q`.
- The next line: `n` space-separated integers representing the initial pile of plates (`A`).

## Output Format

- A list of integers representing the numbers on the plates after processing.

## Constraints

- `1 <= n <= 5 * 10^4`
- `2 <= number[i] <= 10^4`
- `1 <= q <= 1200`

## Example

```bash
# Sample Input
5 1
3 4 7 6 5

# Sample Output
4
6
3
7
5
```
