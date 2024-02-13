# 739. Daily Temperatures

## Intuition

Given an array representing daily temperatures, one approach is to iterate through the array and keep track of the index of each temperature. We can use a stack to store the indices of temperatures that have not found a warmer temperature yet. As we iterate through the array, for each temperature, we check if it is warmer than the temperatures at the indices stored in the stack. If it is, we calculate the difference in days between the current index and the index at the top of the stack and store it in the `result` array. We continue this process until either the stack is empty or the current temperature is not warmer than the temperature at the index on the top of the stack. Finally, we return the `result` array containing the number of days until a warmer temperature for each day.

## Approach

1. Initialize an array `result` to store the number of days until a warmer temperature for each day.
2. Initialize a `stack` to store the indices of temperatures that have not found a warmer temperature yet.
3. Iterate through the input array `t`:
   - While the `stack` is not empty and the temperature at the current index `i` is greater than the temperature at the index stored at the top of the stack:
     - Pop the index from the `stack` and calculate the number of days until a warmer temperature by subtracting the current index `i` from the popped index. Store this value in the `result` array at the index of the popped index.
     - Push the current index `i` onto the `stack`.
4. Return the `result` array.

## Complexity

- Time complexity: `O(n)`, where `n` is the number of temperatures in the input array. This is because each temperature is processed exactly once in the worst case scenario

- Space complexity: `O(n)`, where `n` is the number of temperatures in the input array. This is because we use a stack to store the indices of temperatures, and in the worst case scenario, the stack may contain all the indices of the temperatures. Additionally, we use an array to store the result, which also contributes to the space complexity.

## Code

```java
class Solution {
    public int[] dailyTemperatures(int[] t) {
        int[] result = new int[t.length];

        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < t.length; i++) {
            while(!stack.isEmpty() && t[stack.peek()] < t[i]) {
                int index = stack.pop();
                result[index] = i - index;
            }

            stack.push(i);
        }

        return result;
    }
}
```
