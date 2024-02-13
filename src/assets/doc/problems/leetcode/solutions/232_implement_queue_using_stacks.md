# 232. Implement Queue using Stacks

## Intuition

The goal of this problem is to implement a queue using two stacks. The idea is to maintain two stacks, one for input (where elements are pushed) and the other for output (where elements are popped or peeked). The `moveStacks` method is crucial for transferring elements from the input stack to the output stack when necessary, ensuring that the order of elements is maintained as in a queue.

## Approach

- We use two stacks (`input` and `output`) to simulate the queue operations.
- The `push` operation is straightforward, where we simply push the element onto the `input` stack.
- For `pop` and `peek` operations, we use the `moveStacks` method to transfer elements from `input` to `output` if the `output` stack is empty. This ensures that the front element is always at the top of the `output` stack.
- `pop` then removes and returns the front element from the `output` stack.
- `peek` returns the front element without removing it.
- `empty` checks if both the `input` and `output` stacks are empty.

## Complexity

- Time complexity:

  - `push`: `O(1)`
  - `pop` and `peek`: Amortized `O(1)` due to the potential need to transfer elements between stacks.
  - `empty`: `O(1)`

- Space complexity: `O(n)`, where `n` is the number of elements in the queue. This is because we use two stacks to store the elements.

## Code

```java
class MyQueue {
    Deque<Integer> input;
    Deque<Integer> output;

    public MyQueue() {
        input = new ArrayDeque<>();
        output = new ArrayDeque<>();
    }

    public void push(int x) {
        input.push(x);
    }

    public int pop() {
        moveStacks();
        return output.pop();
    }

    public int peek() {
        moveStacks();
        return output.peek();
    }

    public boolean empty() {
        return output.isEmpty() && input.isEmpty();
    }

    private void moveStacks() {
        if (output.isEmpty()) {
            while (!input.isEmpty()) {
                output.push(input.pop());
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```
