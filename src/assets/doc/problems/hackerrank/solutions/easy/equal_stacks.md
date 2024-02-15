# Equal Stacks

## Intuition

The problem aims to find the maximum height that can be achieved by stacking up the three given stacks of cylinders by removing elements from the top of the stacks. The intuition here is to equalize the height of the three stacks by removing elements from the tallest stack until all stacks have the same height.

## Approach

1. Create three stacks (`A`, `B`, and `C`) to represent the three given stacks of cylinders.
2. Calculate the initial heights of the three stacks by iterating through each stack and summing up the heights of the cylinders.
3. Continuously equalize the heights of the three stacks until they are all equal:
4. Calculate the target height, which is the minimum height among the three stacks.
5. Remove cylinders from each stack until its height equals the target height.
6. Return the height of any of the equalized stacks (they all have the same height now) as the maximum possible height.

## Complexity

- Time complexity: `O(n)`

  - Calculating initial heights: `O(n)`, where `n` is the total number of cylinders in all three stacks.
  - Equalizing stacks: The while loop runs until all stacks are equalized, and in each iteration, it might pop elements from all three stacks. Since the height of stacks decreases with each iteration, each cylinder is pushed and popped at most once. So, the overall time complexity is `O(n)`.

- Space complexity: `O(n)`
  - Three stacks (`A`, `B`, and `C`) are created, each potentially containing `n` elements, where `n` is the total number of cylinders in all three stacks. Thus, the space complexity is `O(n)`.

## Code

```java
class Result {
    public static int equalStacks(List<Integer> h1, List<Integer> h2, List<Integer> h3) {
        Stack<Integer> A = new Stack<>();
        Stack<Integer> B = new Stack<>();
        Stack<Integer> C = new Stack<>();

        int hA = getHeight(h1, A);
        int hB = getHeight(h2, B);
        int hC = getHeight(h3, C);

        while (!(hA == hB && hB == hC)) {
            int target = getTarget(hA, hB, hC);
            hA = equalizeStack(A, hA, target);
            hB = equalizeStack(B, hB, target);
            hC = equalizeStack(C, hC, target);
        }

        return hA;
    }

    private static int equalizeStack(Stack<Integer> S, int height, int target) {
        while (height > target) {
            int h = S.pop();
            height -= h;
        }

        return height;
    }

    private static int getTarget(int hA, int hB, int hC) {
        return Math.min(hA, Math.min(hB, hC));
    }

    private static int getHeight(List<Integer> h1, Stack<Integer> A) {
        int height = 0;
        for (int i = 0; i < h1.size(); i++) {
            int h = h1.get(h1.size() - i - 1);
            height += h;
            A.push(h);
        }

        return height;
    }
}
```
