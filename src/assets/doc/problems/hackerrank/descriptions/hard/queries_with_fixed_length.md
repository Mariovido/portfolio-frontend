# Queries with Fixed Length

## Description

Given an array of integers, this problem involves calculating the minimum values of maxima in subarrays of varying lengths. The task is to perform queries using integers representing the length of subarrays, calculate the result for each query, and return a list of answers.

## Function

```java
public static List<Integer> solve(List<Integer> arr, List<Integer> queries) {}
```

## Input Format

- The first line: two space-separated integers, `n` and `q`.
- The second line: `n` space-separated integers, the elements of `arr`.
- Each of the `q` subsequent lines contains a single integer denoting the value of `d` for that query.

## Output Format

- A List of integers, the answers to each query.

## Constraints

- `0 <= n <= 10^5`
- `0 <= arr[i] < 10^6`
- `1 <= q <= 100`
- `1 <= d <= n`

## Example

```bash
# Sample Input
5 5
1 2 3 4 5
1
2
3
4
5

# Sample Output
1
2
3
4
5
```
