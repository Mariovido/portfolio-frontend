# 78. Subsets

## Description

Given an integer array `nums` of unique elements, this problem involves returning all possible subsets (the power set) of the array. The solution set must not contain duplicate subsets and can be returned in any order.

## Function

```java
public List<List<Integer>> subsets(int[] nums) {}
```

## Input Format

- An array of integers, `nums`, where each element is unique &rarr; `1 <= nums.length <= 10`, `-10 <= nums[i] <= 10`.

## Output Format

- A list of lists, each representing a subset of the array.

## Constraints

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- All the numbers of `nums` are unique.

## Example

```bash
# Sample Input
int[] nums = {1, 2, 3};

# Sample Output
[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```
