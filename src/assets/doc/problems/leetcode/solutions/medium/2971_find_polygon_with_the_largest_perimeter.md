# 2971. Find Polygon With the Largest Perimeter

## Intuition

The problem requires finding the largest perimeter among all possible triangles that can be formed using elements from the given array. Since the perimeter of a triangle is the sum of its three sides, the largest perimeter will likely involve selecting the three largest elements from the array.

## Approach

1. Sort the input array `nums` in non-decreasing order.
2. Initialize two variables: `sum` to keep track of the sum of two sides of a potential triangle, and `ans` to store the largest perimeter found so far. Set `ans` to `-1` initially.
3. Iterate through the sorted array `nums`.
4. For each element `nums[i]`, check if it can form a valid triangle with the previous two elements (`nums[i-2]` and `nums[i-1]`). If `nums[i]` is less than the sum of the previous two elements, it is a valid side of a triangle.
5. Update ans if the current sum of the three sides (`nums[i]` + `nums[i-1]` + `nums[i-2]`) is greater than the current `ans`.
6. Update `sum` by adding the current element `nums[i]`.
7. Finally, return `ans`, which stores the largest perimeter of a valid triangle.

## Complexity

- Time complexity: `O(n * log(n))` (due to sorting the input array)

- Space complexity: `O(1)` (no extra space used other than a few variables)

## Code

```java
class Solution {
    public long largestPerimeter(int[] nums) {
        Arrays.sort(nums);

        long sum = 0;
        long ans = -1;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < sum) {
                ans = nums[i] + sum;
            }
            sum += nums[i];
        }

        return ans;
    }
}
```
