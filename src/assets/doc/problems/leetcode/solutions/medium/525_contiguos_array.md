# 525. Contiguous Array

## Intuition

When looking at this problem, my first thought is to find the longest subarray with an equal number of `0`s and `1`s. A key observation is that when we replace `0`s with `-1`s, the problem transforms into finding the longest subarray with a sum of `0`. This transformation allows us to use a running total to track the balance between `0`s and `1`s as we iterate through the array. When the balance (or count) is the same at two different indexes, it means the subarray between those indexes has an equal number of `0`s and `1`s.

## Approach

1. Initialize a `Map<Integer, Integer>` to store the first occurrence of each count value with its corresponding index. Add an initial entry of `(0, -1)` to handle the edge case where the balanced subarray starts from the beginning.
2. Initialize `maxLength` to `0` to keep track of the longest subarray found and `count` to `0` to keep track of the current balance of `1`s and `0`s (`1`s add `1`, `0`s subtract `1`).
3. Iterate through the array:
   - Increment `count` by `1` if the current element is `1`; otherwise, decrement `count`.
   - If `count` is not in `countMap`, add it with its corresponding index. This step marks the first time this particular balance has been seen.
   - If `count` is already in `countMap`, calculate the length of the subarray from the first occurrence of this count to the current index. Update `maxLength` if this length is larger than the current `maxLength`.
4. Return `maxLength` as the length of the longest balanced subarray.

## Complexity

- Time complexity: `O(n)`

  - The entire input array is traversed only once, and operations within the loop have constant time complexity (checking if a key is in the map and accessing a value by its key are both `O(1)` operations in a hash map).

- Space complexity: `O(n)`
  - In the worst case, the `countMap` may store an entry for each index of the array if the count at each index is unique. Therefore, the space complexity is linear with respect to the input size.

## Code

```java
class Solution {
    public int findMaxLength(int[] nums) {
        Map<Integer, Integer> countMap = new HashMap<>();

        countMap.put(0, -1);

        int maxLength = 0;
        int count = 0;
        for (int i = 0; i < nums.length; i++) {
            count += (nums[i] == 1) ? 1 : -1;

            if (!countMap.containsKey(count)) countMap.put(count, i);
            else maxLength = Math.max(maxLength, i - countMap.get(count));
        }

        return maxLength;
    }
}
```
