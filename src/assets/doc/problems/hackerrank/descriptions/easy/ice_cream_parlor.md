# Ice Cream Parlor

## Description

Two friends want to maximize their ice cream enjoyment with a fixed amount of money. Given a list of ice cream prices, the goal is to select two distinct flavors whose total cost matches their available money.

## Function

```java
public static List<Integer> icecreamParlor(int m, List<Integer> arr) {}
```

## Input Format

- The first line: an integer, `t`, the number of ice cream parlor visits.
- For each visit:
  - The first line: an integer, `m`, the amount of money pooled.
  - The second line: an integer, `n`, the number of flavors offered.
  - The third line: `n` space-separated integers denoting the cost of each flavor.

## Output Format

- An array of two integers representing the indices of the two flavors they buy, sorted in ascending order.

## Constraints

- `1 <= t <= 50`
- `2 <= m <= 10^4`
- `2 <= n <= 10^4`
- `1 <= cost[i] <= 10^4` (for all `i &#8712; [1, n]`)
- There will always be a unique solution.

## Example

```bash
# Sample Input
2
4
5
1 4 5 3 2
4
4
2 2 4 3

# Sample Output
1 4
1 2
```
