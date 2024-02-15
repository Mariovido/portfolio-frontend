# New Year Chaos

## Intuition

The problem seems to be about counting the number of bribes that have occurred in a queue. Bribes happen when a person moves ahead in the queue by overtaking others. We need to determine if the given queue state is achievable and, if so, calculate the minimum number of bribes required.

## Approach

1. Start from the end of the queue and iterate backward.
2. For each person, check if they are in their original position. If not, check if they have been bribed.
3. If a person has been bribed, determine the number of `bribes` by checking if they bribed once or twice. If they've been bribed more than twice, output `Too chaotic`.
4. If the queue state is achievable, output the total number of `bribes`.

## Complexity

- Time complexity: `O(n)`, where `n` is the length of the queue. The algorithm iterates through the queue once.

- Space complexity: `O(1)`, as the algorithm uses a constant amount of extra space for variables and swaps.

## Code

```java
class Result {
    public static void minimumBribes(List<Integer> q) {
        int bribes = 0;

        for (int i = q.size() - 1; i > 0; i--) {
            if (q.get(i) != i + 1) {
                if (((i - 1) >= 0) && q.get(i - 1) == (i + 1)) {
                    bribes++;
                    swap(q, i, i - 1);
                } else if (((i - 2) >= 0) && q.get(i - 2) == (i + 1)) {
                    bribes += 2;
                    swap(q, i - 2, i - 1);
                    swap(q, i - 1, i);
                } else {
                    System.out.println("Too chaotic");
                    return;
                }
            }
        }

        System.out.println(bribes);
    }

    public static void swap(List<Integer> arr, int a, int b) {
        int temp = arr.get(a);
        arr.set(a, arr.get(b));
        arr.set(b, temp);
    }
}
```
