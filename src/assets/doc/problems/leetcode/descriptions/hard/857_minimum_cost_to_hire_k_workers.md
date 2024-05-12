# 857. Minimum Cost to Hire K Workers

## Description

Given arrays `quality` and `wage`, where `quality[i]` represents the quality of the `i^{th}` worker and `wage[i]` represents the minimum wage expectation for the `i^{th}` worker, the problem is to hire exactly `k` workers to form a paid group. Each worker in the paid group must be paid at least their minimum wage expectation, and the pay for each worker must be directly proportional to their quality.

## Function

```java
public double mincostToHireWorkers(int[] quality, int[] wage, int k) {}
```

## Input Format

- Two integer arrays, `quality` and `wage`, representing the quality and wage expectations of workers.
- An integer `k` representing the number of workers to be hired.

## Output Format

- A double representing the least amount of money needed to form a paid group satisfying the given conditions, rounded to six decimal places.

## Constraints

- `n == quality.length == wage.length`
- `1 <= k <= n <= 10^4`
- `1 <= quality[i], wage[i] <= 10^4`

## Example

```bash
# Sample Input
quality = [10,20,5], wage = [70,50,30], k = 2

# Sample Output
105.00000
```
