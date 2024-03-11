# 349. Intersection of Two Arrays

## Intuition

The problem requires finding the intersection of two arrays, meaning the elements that appear in both arrays. A straightforward approach is to use sets to store unique elements and then find the common elements between the two sets.

## Approach

1. Create a `HashSet` to store unique elements from the first array, `nums1`.
2. Iterate through `nums2` and check if each element exists in the `HashSet` created in step `1`.
3. If an element from `nums2` exists in the `HashSet`, add it to another `HashSet`, `finalSet`, to store the common elements.
4. Convert `finalSet` to an array to represent the intersection.
5. Return the resulting array.

## Complexity

- Time complexity: `O(n + m + p)`

  - The time complexity of iterating through `nums1` and adding its elements to the `HashSet` is `O(n)`, where `n` is the length of `nums1`.
  - The time complexity of iterating through `nums2` and checking if each element exists in the `HashSet` is `O(m)`, where `m` is the length of `nums2`.
  - Converting `finalSet` to an array takes `O(p)` time, where `p` is the size of `finalSet`.

- Space complexity: `O(n + p)`, where `n` is the size of the `HashSet` created from `nums1`, and `p` is the size of `finalSet`.

## Code

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums1) {
            set.add(num);
        }

        Set<Integer> finalSet = new HashSet<>();
        for (int num : nums2) {
            if (set.contains(num)) finalSet.add(num);
        }

        int[] result = new int[finalSet.size()];
        int i = 0;
        for (int num : finalSet) {
            result[i++] = num;
        }

        return result;
    }
}
```
