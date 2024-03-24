# 621. Task Scheduler

## Intuition

The intuition behind this solution is to determine the maximum frequency of any task and calculate the idle time based on it. By sorting the tasks based on their frequencies, the solution then distributes the idle time among the tasks.

## Approach

1. Initialize an array `taskCounts` to store the frequency of each task.
2. Iterate through the given tasks array and update the frequency of each task in `taskCounts`.
3. Sort the `taskCounts` array to find the maximum frequency of any task.
4. Calculate the idle time as `(maxFreq - 1) * n`, where `maxFreq` is the maximum frequency and `n` is the cooldown interval.
5. Iterate through the sorted `taskCounts` array from the second highest frequency to the lowest, and decrement the idle time by the minimum of `(maxFreq - 1)` and the frequency of the current task.
6. Ensure that idle time is non-negative.
7. Return the sum of the length of the tasks array and the remaining idle time.

## Complexity

- Time complexity: `O(26 * log(26) + n)`, where sorting the `taskCounts` array takes `O(26 * log(26))` time, and the loop iterating through the task counts array takes `O(n)` time.

- Space complexity: `O(26)` for the `taskCounts` array, which stores the frequency of each task.

## Code

```java
class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] taskCounts = new int[26];
        for (char c : tasks) {
            taskCounts[c - 'A']++;
        }

        Arrays.sort(taskCounts);
        int maxFreq = taskCounts[25];
        int idleTime = (maxFreq - 1) * n;

        for (int i = 24; i >= 0 && idleTime > 0; i --) {
            idleTime -= Math.min(maxFreq - 1, taskCounts[i]);
        }

        idleTime = Math.max(0, idleTime);

        return tasks.length + idleTime;
    }
}
```
