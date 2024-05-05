# KnightL on a Chessboard

## Intuition

The problem involves finding the minimum number of moves for a knight on a chessboard to reach the bottom-right corner from the top-left corner. This can be achieved by performing a breadth-first search (BFS) from the starting position `(0, 0)` and tracking the level of each visited position.

## Approach

1. Initialize an empty list to store the result.
2. Iterate over each possible move in both x and y directions from `1` to `n - 1`.
3. For each move, create a new list to store the results of different move combinations.
4. Within the nested loop, create a `2D` array representing all possible moves of the knight.
5. Perform BFS starting from position `(0, 0)` to explore all possible positions the knight can reach.
6. Keep track of visited positions using a set to avoid revisiting the same position.
7. Update the result list with the minimum number of moves required to reach the bottom-right corner.
8. Return the result list.

## Complexity

- Time complexity: `O(n^2)` - The nested loops iterate through all possible knight moves on the chessboard, and the BFS explores each position once, resulting in a quadratic time complexity.

- Space complexity: `O(n^2)` - The space complexity is also quadratic due to the creation of the `2D` array representing possible moves and the use of a set to track visited positions.

## Code

```java
class Result {
    public static List<List<Integer>> knightlOnAChessboard(int n) {
        List<List<Integer>> res = new ArrayList<>();

        for(int i = 1; i < n; i++) {
            List<Integer> r = new ArrayList<>();

            for(int j = 1; j < n; j++) {
                int[][] dir = new int[][]{
                    {i, j}, {i, -1 * j}, {-1 * i, j}, {-1 * i, -1 * j},
                    {j, i}, {-1 * j, i}, {-1 * j, -1 * i}, {j, -1 * i}};
                Set<String> visited = new HashSet<>();

                int ret = bfs(n, visited, dir);
                r.add(ret);
            }

            res.add(r);
        }

        return res;
    }

    public static int bfs(int n, Set<String> set, int[][] dir) {
        Deque<int[]> q = new ArrayDeque<>();

        q.add(new int[]{0,0});
        set.add("0:0");

        int level = 0;
        while(!q.isEmpty()) {
            int size = q.size();

            while(size-- > 0) {
                int[] p = q.poll();

                if(p[0] == n - 1 && p[1] == n - 1) return level;

                for(int[] d : dir) {
                    int x = d[0] + p[0];
                    int y = d[1] + p[1];

                    if(x < 0 || y < 0 || x >= n || y >= n || set.contains(x+":"+y)) continue;

                    set.add(x + ":" + y);
                    q.offer(new int[]{x, y});
                }
            }

            level++;
        }

        return -1;
    }
}
```
