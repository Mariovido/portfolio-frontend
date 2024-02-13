# 169. Majority Element

## Intuition

The problem aims to find the majority element in an array, which is an element that appears more than `n/2` times, where `n` is the length of the array. One efficient way to solve this problem is by using Moore's Voting Algorithm. This algorithm allows us to find a majority element in linear time and constant space complexity.

## Approach

The approach here is to iterate through the array and maintain two variables: `candidate` and `count`. Initialize `candidate` to any element and `count` to `0`. For each element in the array, if the count is `0`, set the current element as the candidate. If the current element is equal to the `candidate`, increment the `count`; otherwise, decrement the `count`. This process effectively cancels out pairs of elements where one is the candidate and one is not. Finally, the remaining `candidate` is the majority element.

## Complexity

- Time complexity: The algorithm iterates through the array once, making it linear, i.e., `O(n)`, where `n` is the length of the input array.

- Space complexity: `O(1)`, as it only requires a fixed amount of extra space for storing variables regardless of the size of the input array.

## Code

```java
class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        int candidate = 0;

        for (int num : nums) {
            if (count == 0) candidate = num;

            count += (num == candidate) ? 1 : -1;
        }

        return candidate;
    }
}
```
