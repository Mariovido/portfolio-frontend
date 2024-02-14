# 2149. Rearrange Array Elements by Sign

## Intuition

The intuition behind this approach is to iterate through the given array and separate positive and negative integers into two separate sections in the resulting array. Positive integers are placed at even indices, while negative integers are placed at odd indices.

## Approach

1. Create a new array `results` of the same length as the input array `nums`.
2. Initialize two indices `posIndex` and `negIndex` to `0` and `1` respectively. These indices will keep track of the positions where positive and negative integers will be placed in the `results` array.
3. Iterate through each element `num` in the `nums` array.
4. If `num` is positive, place it at index `posIndex` in the `results` array and then increment `posIndex` by `2`.
5. If `num` is negative, place it at index `negIndex` in the `results` array and then increment `negIndex` by `2`.
6. Return the `results` array.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the input array `nums`. We iterate through the array once.

- Space complexity: `O(n)`, where `n` is the length of the input array `nums`. We create an additional array of the same length as the input array.

## Code

```java
class Solution {
    public int[] rearrangeArray(int[] nums) {
        int[] results = new int[nums.length];

        int posIndex = 0;
        int negIndex = 1;
        for (int num : nums) {
            if (num > 0) {
                results[posIndex] = num;
                posIndex += 2;
            }
            else {
                results[negIndex] = num;
                negIndex += 2;
            }
        }

        return results;
    }
}
```
