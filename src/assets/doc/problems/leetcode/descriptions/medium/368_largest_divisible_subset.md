# 368. Largest Divisible Subset

## Description

Given a set of distinct positive integers `nums`, the problem involves finding the largest subset answer such that every pair `(answer[i], answer[j])` of elements in this subset satisfies `answer[i] % answer[j] == 0` or `answer[j] % answer[i] == 0`. Multiple solutions are acceptable.

## Function

```java
public List<Integer> largestDivisibleSubset(int[] nums) {}
```

## Input Format

- A list of distinct positive integers `nums`, with `1 <= nums.length <= 1000` and `1 <= nums[i] <= 2 * 10^9`.

## Output Format

- A list representing the largest subset `answer`, satisfying the given conditions.

## Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 10^9`
- All integers in `nums` are unique.

## Example

```bash
# Sample Input
nums = [1,2,3]

# Sample Output
[1,2]
```
