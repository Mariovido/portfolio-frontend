# 217. Contains Duplicate

## Intuition

The intuition behind solving this problem is to use a `HashSet` to keep track of unique elements encountered while iterating through the array. If at any point during the iteration, we encounter an element that already exists in the set, it means there is a duplicate in the array, and we can return `true`. If we complete the iteration without finding any duplicates, we return `false`.

## Approach

1. Initialize a `HashSet` to store unique elements.
2. Iterate through the input array `nums`.
3. For each element `num` in `nums`, check if it's already present in the `HashSet` using the `add()` method.
4. If `add()` returns `false`, it means `num` is already in the `HashSet`, indicating a duplicate, so return `true`.
5. If the loop completes without finding any duplicates, return `false`.

## Complexity

- Time complexity: `O(n)` - We iterate through the array once, where `n` is the number of elements in the array.

- Space complexity: `O(n)` - In the worst-case scenario, all elements in the array are unique, so the HashSet will contain all elements, requiring `n` space.

## Code

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();

        for (int num : nums) {
            if (!set.add(num)) return true;
        }

        return false;
    }
}
```
