# Max Min

## Description

Given a list of integers `arr` and an integer `k`, the goal is to create an array `arr'` of length `k` from elements of `arr` such that its unfairness is minimized. The unfairness of an array is calculated as the difference between the maximum and minimum values in the array `max(arr') - min(arr')`.

## Function

```java
public static int maxMin(int k, List<Integer> arr) {}
```

## Input Format

- The first line: an integer `n`, the number of elements in array `arr` &rarr; `2 <= n <= 10^5`.
- The second line: an integer `k`, the number of elements to select &rarr; `2 <= k <= n`.
- Each of the next `n` lines contains an integer `arr[i]` where `0 <= i < n` &rarr; `0 <= arr[i] <= 10^9`.

## Output Format

- An integer, the minimum possible unfairness.

## Constraints

- `2 <= n <= 10^5`
- `2 <= k <= n`
- `0 <= arr[i] <= 10^9`

## Example

```bash
# Sample Input
10
4
1
2
3
4
10
20
30
40
100
200

# Sample Output
3
```
