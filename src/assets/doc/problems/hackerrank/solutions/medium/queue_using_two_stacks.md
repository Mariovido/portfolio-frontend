# Queue using Two Stacks

## Intuition

The problem seems to involve implementing a queue using two stacks. Each query type corresponds to an operation on the queue - `enqueue`, `dequeue`, or `peek`. We can utilize the properties of stacks to perform these operations efficiently.

## Approach

1. We'll use two stacks, `input` and `output`, to simulate the queue.
2. For `enqueue` operation, we'll simply push the element onto the `input` stack.
3. For `dequeue` operation, we'll ensure that the `output` stack is populated. If not, we'll transfer all elements from the `input` stack to the `output` stack by popping from `input` and pushing onto `output`. Then we'll pop from the `output` stack.
4. For `peek` operation, we'll follow the same logic as dequeue but without popping from `output`.
5. We'll iterate through the `queries`, performing the corresponding operations.

## Complexity

- Time complexity:

  - Enqueue operation: `O(1)`
  - Dequeue and peek operations: Amortized `O(1)` due to the potential transfer of elements between stacks.

- Space complexity: `O(n)` where `n` is the number of elements in the queue, as we are using two stacks to simulate the queue.

## Code

```java
class Result {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int queries = input.nextInt();
        int queryType;
        int value;
        Queue<Integer> queue = new Queue<>();

        for (int i = 0; i < queries; i++) {
            queryType = input.nextInt();

            if (queryType == 1) {
                value = input.nextInt();
                queue.enqueue(value);
            } else if (queryType == 2) queue.dequeue();
            else if (queryType == 3) System.out.println(queue.peek());
        }

        input.close();
    }

    static class Queue<E> {
        private Stack<E> input, output;

        public Queue() {
            input = new Stack<>();
            output = new Stack<>();
        }

        public void enqueue(E num) {
            input.push(num);
        }

        public void dequeue() {
            peek();
            output.pop();
        }

        public E peek() {
            if (output.isEmpty()) {
                while(!input.isEmpty()) {
                    output.push(input.pop());
                }
            }

            return output.peek();
        }
    }
}
```
