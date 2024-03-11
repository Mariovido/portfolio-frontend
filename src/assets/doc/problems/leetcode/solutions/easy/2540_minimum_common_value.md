# 2540. Minimum Common Value

## Intuition

The code aims to find the first common element between two sorted arrays, `nums1` and `nums2`, using two pointers approach. It takes advantage of the fact that the arrays are sorted to optimize the search.

## Approach

1. Initialize two pointers, `pointer1` and `pointer2`, to the beginning of `nums1` and `nums2`, respectively.
2. Iterate through both arrays simultaneously while neither pointer has reached the end of its respective array.
3. At each iteration:
   - Retrieve the elements `num1` and `num2` pointed to by `pointer1` and `pointer2`.
   - If `num1` is equal to `num2`, return the common element.
   - If `num1` is less than `num2`, increment `pointer1` to move to the next element in `nums1`.
   - If `num1` is greater than `num2`, increment `pointer2` to move to the next element in `nums2`.
4. If no common element is found after iterating through both arrays, return `-1`.

## Complexity

- Time complexity: `O(n + m)`, where `n` is the length of `nums1` and `m` is the length of `nums2`. Both pointers iterate through their respective arrays once.

- Space complexity: `O(1)`, as only a constant amount of extra space is used regardless of the input size.

## Code

```java
class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        int pointer1 = 0;
        int pointer2 = 0;

        while (pointer1 < nums1.length && pointer2 < nums2.length) {
            int num1 = nums1[pointer1];
            int num2 = nums2[pointer2];

            if (num1 == num2) return num1;
            else if (num1 < num2) pointer1++;
            else pointer2++;
        }

        return -1;
    }
}
```
