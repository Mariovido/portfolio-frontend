# 752. Open the Lock

## Intuition

Initially, the problem seems to be a perfect candidate for a Breadth-First Search (BFS) due to its nature of finding the shortest path to a target configuration. Given that each combination on the lock can be seen as a node in a graph, and each node can be transformed into up to `8` other combinations (by increasing or decreasing each of the `4` wheels), BFS can efficiently explore these nodes level by level until the target combination is found.

## Approach

1. **Initialize Data Structures**: Use a HashSet for deadends (`dead`) for `O(1)` lookup times. Use a Queue (`queue`) to perform the BFS starting from `0000` and a HashSet (`seen`) to keep track of visited combinations.
2. **BFS Initialization**: Add the initial `0000` to both the queue and the seen set.
3. **BFS Loop**:
   - While the queue is not empty, process nodes level by level, incrementing the depth at each level.
   - For each node, check if it matches the target. If it does, return the current depth as the shortest path.
   - If the node is in the deadends, skip it.
   - For each of the `4` digits in the lock, generate up to `2` possible next combinations (one by increasing the digit and one by decreasing it) while handling wraparound at `0` and `9`.
   - Check if the newly generated combinations are neither in the seen set nor deadends before adding them to the queue and seen set.
4. **End Condition**: If the queue is exhausted without finding the target, return `-1` indicating the target is unreachable.

## Complexity

- Time complexity: `O(N)`, where `N` represents the total number of possible combinations of the lock (`10,000` in this case, since each of the `4` digits can be any of `0-9`).

- Space complexity: `O(N)` due to storing all combinations in the `seen` and `queue` data structures in the worst case.

## Code

```java
class Solution {
    public int openLock(String[] deadends, String target) {
        Set<String> dead = new HashSet<>(Arrays.asList(deadends));

        Deque<String> queue = new ArrayDeque<>();
        queue.add("0000");

        Set<String> seen = new HashSet<>();
        seen.add("0000");

        int depth = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String node = queue.poll();

                if (node.equals(target)) return depth;

                if (dead.contains(node)) continue;

                for (int j = 0; j < 4; j++) {
                    char c = node.charAt(j);
                    String s1 = node.substring(0, j) + (c == '9' ? 0 : c - '0' + 1) + node.substring(j + 1);
                    String s2 = node.substring(0, j) + (c == '0' ? 9 : c - '0' - 1) + node.substring(j + 1);

                    if (!seen.contains(s1) && !dead.contains(s1)) {
                        queue.add(s1);
                        seen.add(s1);
                    }

                    if (!seen.contains(s2) && !dead.contains(s2)) {
                        queue.add(s2);
                        seen.add(s2);
                    }
                }
            }

            depth++;
        }

        return -1;
    }
}
```
