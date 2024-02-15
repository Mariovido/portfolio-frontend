# QHEAP1

## Intuition

The code appears to implement a priority queue using a `PriorityQueue` in Java. It takes input queries, where:

- If the query is `1`, it adds an element to the priority queue.
- If the query is `2`, it removes a specified element from the priority queue.
- If the query is `3`, it prints the highest priority element (the head) of the priority queue.

## Approach

The approach involves using a `PriorityQueue` to efficiently handle the operations of adding, removing, and peeking elements based on their priority. The `PriorityQueue` class in Java implements a priority heap, which ensures that the highest priority element is always at the front of the queue.

- For query type `1`, we add elements to the priority queue.
- For query type `2`, we remove a specified element from the priority queue.
- For query type `3`, we print the highest priority element in the priority queue without removing it.

## Complexity

- Time complexity: `O(q * log(n))` for `q` queries, where `n` is the number of elements in the priority queue at that point.

  - Adding an element to the priority queue (query type `1`): `O(log(n))`, where n is the number of elements in the priority queue.
  - Removing an element from the priority queue (query type `2`): `O(n)` in the worst case, as it might need to search for the element to remove.
  - Peeking the highest priority element (query type `3`): `O(1)`, as it directly accesses the head of the priority queue.

- Space complexity: `O(n)`
  - Space complexity for the priority queue: `O(n)`, where `n` is the number of elements in the priority queue.
  - Additional space complexity for other variables and input/output: `O(1)`.

## Code

```java
class Result {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int q = scanner.nextInt();
        Queue<Integer> priorityQueue = new PriorityQueue<>();
        while (q-- > 0) {
            int query = scanner.nextInt();

            if (query == 1) {
                int element = scanner.nextInt();
                priorityQueue.add(element);
            } else if (query == 2) {
                int element = scanner.nextInt();
                priorityQueue.remove(element);
            } else if (query == 3) {
                System.out.println(priorityQueue.peek());
            }
        }

        scanner.close();
    }
}
```
