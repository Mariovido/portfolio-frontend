# The Bomberman Game

## Intuition

The problem seems to involve simulating the behavior of bombs being placed and detonated on a grid represented by a list of strings. We need to understand the rules for placing and detonating bombs to determine the state of the grid after a given number of iterations.

## Approach

1. Parse the input grid into a 2D list structure for easier manipulation.
2. Determine the number of iterations needed based on the input parameter `n`.
3. If `n` is even, all cells will eventually become bombs, so simply fill the grid with bombs and return it.
4. If `n` is odd, bombs will be placed and detonated in alternating cycles.
   - Initially, fill the grid with bombs.
   - Detonate bombs by clearing the cells with bombs and updating neighboring cells if necessary.
   - Repeat the process for the next cycle.
5. Return the final state of the grid after the specified number of iterations.

## Complexity

- Time complexity: `O(R * C)`, where `R` is the number of rows and `C` is the number of columns in the grid. This is because we iterate through each cell in the grid to perform operations.

- Space complexity: `O(R * C)`, where `R` is the number of rows and `C` is the number of columns in the grid. We use additional space to store the 2D list representation of the grid and the bomb locations.

## Code

```java
class Result {
    private static final Map<Integer, List<Integer>> bomb = new HashMap<>();

    public static List<String> bomberMan(int n, List<String> grid) {
        List<List<String>> collect = grid.stream()
                .map(line -> Arrays.stream(line.split("")).collect(Collectors.toList()))
                .collect(Collectors.toList());

        int loop = n / 2;

        if (n == 1) return grid;

        if (n % 2 == 0) {
            fill(collect);
            return collect.stream().map(line -> String.join("", line)).collect(Collectors.toList());
        } else {
            fill(collect);
            boom(collect);
            bomb.clear();
        }

        if (loop % 2 == 0) {
            fill(collect);
            boom(collect);
        }

        return collect.stream()
                .map(line -> line.stream().collect(Collectors.joining()))
                .collect(Collectors.toList());
    }

    private static void boom(List<List<String>> list) {
        bomb.forEach((key, value) -> {
            if (key == 0) {
                boomLine(value, list.get(key), true);
                if (list.size() - 1 > key) boomLine(value, list.get(key + 1), false);
            } else if (key > 0 && key < list.size() - 1) {
                boomLine(value, list.get(key), true);
                boomLine(value, list.get(key + 1), false);
                boomLine(value, list.get(key - 1), false);
            } else if (key == list.size() - 1) {
                boomLine(value, list.get(key), true);
                if (key != 0) boomLine(value, list.get(key - 1), false);
            }
        });
    }

    private static void boomLine(List<Integer> bomb, List<String> list, boolean fillAround) {
        int size = list.size() - 1;
        bomb.forEach(v -> {
            list.set(v, ".");
            if (fillAround) fillAround(list, size, v);
        });
    }

    private static void fillAround(List<String> list, int size, int bomb) {
        if (bomb - 1 >= 0) list.set(bomb - 1, ".");
        if (size >= bomb + 1) list.set(bomb + 1, ".");
    }

    private static void fill(List<List<String>> list) {
        for (int i = 0; i < list.size(); i++) {
            List<String> line = list.get(i);
            for (int j = 0; j < line.size(); j++) {
                int finalJ = j;
                if (line.get(j).equals("O")) {
                    bomb.compute(i, (a, b) -> {
                        if (b == null) return new ArrayList<>(Collections.singletonList(finalJ));
                        b.add(finalJ);
                        return b;
                    });
                }
                line.set(j, "O");
            }
        }
    }
}
```
